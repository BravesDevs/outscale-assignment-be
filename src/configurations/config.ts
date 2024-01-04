import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  APP_NAME: process.env.APP_NAME,
  SERVICE_PORT: process.env.SERVICE_PORT,
  API_HOSTS: process.env.API_HOSTS || ["*"],
  JWT_TOKEN_KEY: process.env.JWT_TOKEN_KEY || "-",
  DATABASE: {
    MYSQL_DATABASE_HOST: process.env.MYSQL_DATABASE_HOST,
    MYSQL_DATABASE_NAME: process.env.MYSQL_DATABASE_DB,
    MYSQL_DATABASE_USER: process.env.MYSQL_DATABASE_USER,
    MYSQL_DATABASE_PASSWORD: process.env.MYSQL_DATABASE_PASSWORD,
  },
};
