import { default as express } from "express";
import { default as cors } from "cors";
import { config } from "./configurations/config";

class App {
  private port: number;
  private app: express.Application;

  constructor(port: number) {
    this.port = port;
    this.app = express();
  }

  private initializeMiddlewares() {
    this.app.use(
      cors({
        origin: config.API_HOSTS,
        methods: "GET,POST,PUT,DELETE,PATCH",
      })
    );

    this.app.use(
      express.urlencoded({
        extended: true,
        limit: "100KB",
      })
    );
    this.app.use(
      express.json({
        limit: "200KB",
        strict: false,
      })
    );
  }
}
