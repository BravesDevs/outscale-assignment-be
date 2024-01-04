import { config } from "./../config";
import { ConnectionOptions } from "typeorm";

export const ormConfig: ConnectionOptions = {
  type: "mysql",
  host: config.DATABASE.MYSQL_DATABASE_HOST,
  username: config.DATABASE.MYSQL_DATABASE_USER,
  password: config.DATABASE.MYSQL_DATABASE_PASSWORD,
  database: config.DATABASE.MYSQL_DATABASE_NAME,
  charset: "utf8mb4",
  synchronize: false,
  timezone: "UTC",
  extra: { connectionLimit: 20 },
  entities: ["./**/models/sql/entities/*.js"],
  logging: false,
};
