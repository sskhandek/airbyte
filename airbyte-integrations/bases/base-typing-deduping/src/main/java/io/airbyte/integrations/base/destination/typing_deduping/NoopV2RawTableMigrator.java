package io.airbyte.integrations.base.destination.typing_deduping;

public class NoopV2RawTableMigrator<DialectTableDefinition> implements V2RawTableMigrator<DialectTableDefinition> {
  @Override
  public void migrateIfNecessary(final StreamConfig streamConfig) {
    // do nothing
  }
}
