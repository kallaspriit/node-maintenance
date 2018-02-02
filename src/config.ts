import * as config from "config";

export interface IHttpsConfig {
  enabled: boolean;
  certFilename: string;
  keyFilename: string;
}

export interface IServerConfig {
  hostname: string;
  port: number;
  https: IHttpsConfig;
}

export interface IConfig {
  server: IServerConfig;
}

export default (config as {}) as IConfig;
