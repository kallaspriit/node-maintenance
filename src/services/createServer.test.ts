import * as express from "express";
import * as http from "http";
import * as https from "https";
import config, { IHttpsConfig } from "../config";
import createServer from "./createServer";

function getHttpsConfig(override: Partial<IHttpsConfig> = {}): IHttpsConfig {
  return {
    enabled: false,
    certFilename: config.server.https.certFilename,
    keyFilename: config.server.https.keyFilename,
    ...override,
  };
}

describe("service", () => {
  describe("createServer", () => {
    it("should return http server if https is disabled", () => {
      const app = express();

      const server = createServer(
        app,
        getHttpsConfig({
          enabled: false,
        }),
      );

      expect(server).toBeInstanceOf(http.Server);
    });

    it("should return https server if https is enabled", () => {
      const app = express();

      const server = createServer(
        app,
        getHttpsConfig({
          enabled: true,
        }),
      );

      expect(server).toBeInstanceOf(https.Server);
    });
  });
});
