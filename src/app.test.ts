import * as HttpStatus from "http-status-codes";
import * as supertest from "supertest";
import setupApp from "./app";

let app: supertest.SuperTest<supertest.Test>;

describe("app", () => {
  beforeEach(async () => {
    app = supertest.agent(await setupApp());
  });

  it("should render maintenance view for index", async () => {
    const response = await app.get("/").send();

    expect(response.status).toEqual(HttpStatus.OK);
    expect(response.text).toMatchSnapshot();
  });

  it("should render maintenance view for every url", async () => {
    const response = await app.get("/foo/bar").send();

    expect(response.status).toEqual(HttpStatus.OK);
    expect(response.text).toMatchSnapshot();
  });
});
