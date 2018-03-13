import * as sourceMapSupport from 'source-map-support';
sourceMapSupport.install();

import connectToDb from '@js-entity-repos/knex/dist/utils/connectToDb';
import factoryTest from '@js-migrations/core/dist/factoryTest';
import { config } from 'dotenv';
import factory from './factory';
config();

const dbConfig = {
  client: 'mysql',
  connection: {
    database: process.env.KNEX_DATABASE,
    host: '127.0.0.1',
    ...(process.env.KNEX_PASSWORD === undefined ? {} : {
      password: process.env.KNEX_PASSWORD,
    }),
    user: process.env.KNEX_USER,
  },
};

// tslint:disable-next-line:no-console
console.log({ dbConfig });

factoryTest(factory({
  db: connectToDb(dbConfig),
  tableName: 'migrations',
}));
