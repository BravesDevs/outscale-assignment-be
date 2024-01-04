import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  APP_NAME: process.env.APP_NAME,
  SERVICE_PORT: process.env.SERVICE_PORT,
  API_HOSTS: process.env.API_HOSTS || ["*"],
  JWT_TOKEN_KEY: process.env.JWT_TOKEN_KEY || "-",
};
