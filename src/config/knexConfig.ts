import { Knex } from 'knex'

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: "../database/dev.sqlite3"
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'migrations'
  }
};