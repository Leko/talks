import querystring from "querystring";
import supertest from "supertest";
import { createApp, addRoutes } from "../app";

const app = addRoutes(createApp());

describe("GET /private", () => {
  it("should return 401 when unauthorized", async () => {
    await supertest(app)
      .get("/private")
      .expect(401);
  });
  it("should return nickname when authorized", async () => {
    const res = await supertest(app)
      .post("/login")
      .send(querystring.stringify({ username: "test", password: "password" }));

    const cookie = res.header["set-cookie"];
    await supertest(app)
      .get("/private")
      .set("Cookie", cookie)
      .expect(200)
      .expect("Taro");
  });
});
