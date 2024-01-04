import { default as express } from "express";
import { default as cors } from "cors";
import { config } from "./configurations/config";
import { createConnection } from "typeorm";
import { bookRoutes } from "./routes";
import { ormConfig } from "./configurations/database/ormconfig";
class App {
  private port: number;
  private app: express.Application;

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.createDBConnections();
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private createDBConnections() {
    // Create MySQL Connection
    createConnection(ormConfig);
    console.log("MySQL Connection Created");
  }

  private initializeMiddlewares() {
    this.app.use(
      cors({
        origin: config.API_HOSTS,
        methods: "GET,POST,PUT,DELETE",
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

  private initializeRoutes() {
    this.app.use("/api", bookRoutes);
  }

  public Start() {
    this.app.listen(this.port, () => {
      console.log(`Server started at port ${this.port}`);
    });
  }
}

new App(parseInt(config.SERVICE_PORT)).Start();
