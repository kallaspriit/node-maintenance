import * as express from "express";
import getHttpsRedirectMiddleware from "./getHttpsRedirectMiddleware";

describe("service", () => {
  describe("getHttpsRedirectMiddleware", () => {
    it("should return an express middleware", () => {
      const middleware = getHttpsRedirectMiddleware("example.com");

      expect(typeof middleware).toEqual("function");
    });

    it("should redirect all requests to https", () => {
      const middleware = getHttpsRedirectMiddleware("example.com");
      // tslint:disable-next-line:no-object-literal-type-assertion
      const request: express.Request = {
        originalUrl: "/foo/bar",
      } as express.Request;

      const redirectMock = jest.fn();

      // tslint:disable-next-line:no-object-literal-type-assertion
      const response: express.Response = {
        // tslint:disable-next-line:no-unnecessary-callback-wrapper
        redirect: (url: string) => redirectMock(url),
      } as express.Response;

      const next: express.NextFunction = () => {
        // nothing
      };

      middleware(request, response, next);

      expect(redirectMock.mock.calls.length).toEqual(1);
      expect(redirectMock.mock.calls[0].length).toEqual(1);
      expect(redirectMock.mock.calls[0][0]).toEqual("https://example.com/foo/bar");
    });
  });
});
