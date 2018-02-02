import { Request } from "express";
import html from "../lib/html-literal/index";

export default (request: Request): string => html`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Under Maintenance</title>
    </head>
    <body>
      <h1>Under Maintenance</h1>
      <p>Sorry for the inconvenience but the site is currently under planned maintenance.</p>
      <p>We will be back shortly, please check again in a few minutes.</p>
      <p><a href="${request.originalUrl}">Reload page</a></p>
    </body>
  </html>
`;
