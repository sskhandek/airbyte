/*
 * Copyright (c) 2023 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.integrations.destination.snowflake;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.params.provider.Arguments.arguments;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.airbyte.commons.jackson.MoreMappers;
import io.airbyte.commons.json.Jsons;
import io.airbyte.commons.resources.MoreResources;
import io.airbyte.integrations.base.Destination;
import io.airbyte.integrations.base.DestinationConfig;
import io.airbyte.integrations.base.SerializedAirbyteMessageConsumer;
import io.airbyte.integrations.destination.snowflake.SnowflakeDestination.DestinationType;
import io.airbyte.integrations.destination_async.AsyncStreamConsumer;
import io.airbyte.protocol.models.v0.ConfiguredAirbyteCatalog;
import io.airbyte.protocol.models.v0.ConnectorSpecification;

import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Stream;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.ArgumentsProvider;
import org.junit.jupiter.params.provider.ArgumentsSource;
import org.junit.jupiter.params.provider.MethodSource;

public class SnowflakeDestinationTest {

  @BeforeEach
  public void setup() {
    DestinationConfig.initialize(Jsons.emptyObject());
  }

  private static Stream<Arguments> urlsDataProvider() {
    return Stream.of(
        // See https://docs.snowflake.com/en/user-guide/admin-account-identifier for specific requirements
        // "Account name in organization" style
        arguments("https://acme-marketing-test-account.snowflakecomputing.com", true),
        arguments("https://acme-marketing_test_account.snowflakecomputing.com", true),
        arguments("https://acme-marketing.test-account.snowflakecomputing.com", true),

        // Legacy style (account locator in a region)
        // Some examples taken from
        // https://docs.snowflake.com/en/user-guide/admin-account-identifier#non-vps-account-locator-formats-by-cloud-platform-and-region
        arguments("xy12345.snowflakecomputing.com", true),
        arguments("xy12345.us-gov-west-1.aws.snowflakecomputing.com", true),
        arguments("xy12345.us-east-1.aws.snowflakecomputing.com", true),
        // And some other formats which are, de facto, valid
        arguments("xy12345.foo.us-west-2.aws.snowflakecomputing.com", true),
        arguments("https://xy12345.snowflakecomputing.com", true),
        arguments("https://xy12345.us-east-1.snowflakecomputing.com", true),
        arguments("https://xy12345.us-east-1.aws.snowflakecomputing.com", true),
        arguments("https://xy12345.foo.us-west-2.aws.snowflakecomputing.com", true),

        // Invalid formats
        arguments("example.snowflakecomputing.com/path/to/resource", false),
        arguments("example.snowflakecomputing.com:8080", false),
        arguments("example.snowflakecomputing.com:12345", false),
        arguments("example.snowflakecomputing.com//path/to/resource", false),
        arguments("example.snowflakecomputing.com/path?query=string", false),
        arguments("example.snowflakecomputing.com/#fragment", false),
        arguments("ab12345.us-east-2.aws.snowflakecomputing. com", false),
        arguments("ab12345.us-east-2.aws.snowflakecomputing..com", false));
  }

  @ParameterizedTest
  @MethodSource({"urlsDataProvider"})
  void testUrlPattern(final String url, final boolean isMatch) throws Exception {
    final ConnectorSpecification spec = new SnowflakeDestination(OssCloudEnvVarConsts.AIRBYTE_OSS).spec();
    final Pattern pattern = Pattern.compile(spec.getConnectionSpecification().get("properties").get("host").get("pattern").asText());

    final Matcher matcher = pattern.matcher(url);
    assertEquals(isMatch, matcher.find());
  }

  @ParameterizedTest
  @MethodSource("destinationTypeToConfig")
  public void testS3ConfigType(final String configFileName, final DestinationType expectedDestinationType) throws Exception {
    final JsonNode config = Jsons.deserialize(MoreResources.readResource(configFileName), JsonNode.class);
    final DestinationType typeFromConfig = SnowflakeDestinationResolver.getTypeFromConfig(config);
    assertEquals(expectedDestinationType, typeFromConfig);
  }

  private static Stream<Arguments> destinationTypeToConfig() {
    return Stream.of(arguments("insert_config.json", DestinationType.INTERNAL_STAGING));
  }

  @Test
  void testWriteSnowflakeInternal() throws Exception {
    final JsonNode config = Jsons.deserialize(MoreResources.readResource("internal_staging_config.json"), JsonNode.class);
    final SerializedAirbyteMessageConsumer consumer = new SnowflakeDestination(OssCloudEnvVarConsts.AIRBYTE_OSS)
        .getSerializedMessageConsumer(config, new ConfiguredAirbyteCatalog(), null);
    assertEquals(AsyncStreamConsumer.class, consumer.getClass());
  }

}
