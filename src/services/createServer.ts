import * as express from "express";
import * as fs from "fs";
import * as http from "http";
import * as https from "https";
import { IHttpsConfig } from "../config";

export default function createServer(app: express.Express, httpsConfig: IHttpsConfig): http.Server | https.Server {
  if (httpsConfig.enabled) {
    return https.createServer(
      {
        cert: fs.readFileSync(httpsConfig.certFilename),
        key: fs.readFileSync(httpsConfig.keyFilename),
      },
      app,
    );
  }

  return http.createServer(app);
}
