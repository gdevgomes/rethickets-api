import { Knex } from "knex";
import path from "path";

const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: `${__dirname}/src/database/dev.sqlite3`,
  },
  useNullAsDefault: true,
  migrations: {
    tableName: "knex_migrations",
    directory: "migrations",
  },
};

export default config;