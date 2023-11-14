const db = require("../db");
const app = require("../index");
const request = require("supertest");
const User = require("../model/Users");
// beforeEach(async () => {
//   db();
//   await User.deleteMany();
// });

describe("users APi", () => {
  it("Post users into database", async () => {
    await db();
    const user = await new User({
      name: "Testing Name",
      status: "Testing Status",
    });
    await user.save();
    const check = await User.findOne({
      name: "Testing Name",
      status: "Testing Status",
    });
    expect(user.name).toBe(check.name);
    expect(user.status).toEqual(check.status);
  });

  it("get users from database", async () => {
    await db();
    const user = await User.find({}).limit(10);
    expect(user).not.toBeUndefined();
  });
  it("response has name and status", async () => {
    const response = await request(app)
      .post("/users")
      .send({ name: "username", status: "user wins" });
    expect(response.statusCode).toBe(200);
    expect(response.statusCode).toBe(200);
  });
  it("response have no name and status", async () => {
    const response = await request(app)
      .post("/users")
      .send({ status: "user wins" });
    expect(response.statusCode).toBe(400);
  });
});
