import * as express from "express";

export default function getHttpsRedirectMiddleware(hostname: string): express.RequestHandler {
  return (request, response, _next) => {
    response.redirect(`https://${hostname}${request.originalUrl}`);
  };
}
