import Migration from '@js-migrations/core/dist/utils/types/Migration';
import * as knex from 'knex';

export default interface FactoryConfig {
  readonly db: () => Promise<knex>;
  readonly lockTableName?: string;
  readonly migrations?: Migration[];
  readonly tableName?: string;
}
