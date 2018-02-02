import * as express from "express";
import renderMaintenanceView from "./services/renderMaintenanceView";

export default async function setupApp(): Promise<express.Express> {
  const app = express();

  // respond to all requests with the same view
  app.use((request, response, _next) => {
    response.send(renderMaintenanceView(request));
  });

  return app;
}
