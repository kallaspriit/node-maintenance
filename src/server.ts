import chalk from "chalk";
import * as express from "express";
import setupApp from "./app";
import config from "./config";
import createServer from "./services/createServer";
import getHttpsRedirectMiddleware from "./services/getHttpsRedirectMiddleware";

// setup application and start server
(async () => {
  const app = await setupApp();

  // create web server (either http or https based on config)
  const httpServer = createServer(app, config.server.https);

  // start the server
  httpServer.listen(config.server.port, () => {
    console.log(
      `server started on port ${chalk.bold(config.server.port.toString())}`
    );
  });

  // also start a server on http to redirect to https if https is enabled
  if (config.server.https.enabled) {
    const httpPort = 80;

    express()
      .use(getHttpsRedirectMiddleware(config.server.hostname))
      .listen(httpPort);
  }
})().catch(e => console.error(e, "application error"));

// log unhandled rejections with helpful error message
process.on("unhandledRejection", (error, _promise) => {
  console.error(
    error,
    "Unhandled promise rejection. This probably means that you have forgot to add try-catch around an async call. Try adding: try { await example() } catch (error) { next(error); }."
  );

  process.exit(1);
});
