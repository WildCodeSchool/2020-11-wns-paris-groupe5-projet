import request from "supertest";
// const app = require("../app");
import { app } from "../app";
const User = require("../models/User");
const { setUpDatabase, userOne, userOneId, } = require("./fixtures/db");
beforeEach(setUpDatabase);

describe("Signup a new user", () => {
  test("Don't create new user if email is invalid", async () => {
    await request(app)
      .post("/api/student/create")
      .send({
        firstName: "Ibra",
        lastName: "Niass",
        email: "ibraexample1.com",
        password: "MyPassTest1",
        phoneNumber: "00758325825",
      })
      .expect(400);
  });
  test("Create user and send code 201", async () => {
    await request(app)
      .post("/api/student/create")
      .send({
        firstName: "Ibra",
        lastName: "Niass",
        email: "ibra@example1.com",
        password: "MyPassTest1",
        phoneNumber: "00758325825",
      })
      .expect(201);
  });

  test("Can find created user in database", async () => {
    const response = await request(app).post("/api/student/create").send({
      firstName: "Ibra",
      lastName: "Niass",
      email: "ibra@example1.com",
      password: "MyPassTest1",
      phoneNumber: "00758325825",
    });

    // Assert that the database was changed correctly
    console.log("response.body.user._id", response.body.user._id);
    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();
  });

  test("Data send back to front is correct", async () => {
    const response = await request(app).post("/api/student/create").send({
      firstName: "Ibra",
      lastName: "Niass",
      email: "ibra@example1.com",
      password: "MyPassTest1",
      phoneNumber: "00758325825",
    });
    const user = await User.findById(response.body.user._id);

    // // Assertion about the response
    expect(response.body).toMatchObject({
      user: {
        firstName: "Ibra",
        lastName: "Niass",
        email: "ibra@example1.com",
        phoneNumber: "00758325825",
      },
      token: user.tokens[0].token,
    });
  });

  test("Password hash", async () => {
    const response = await request(app).post("/api/student/create").send({
      firstName: "Ibra",
      lastName: "Niass",
      email: "ibra@example1.com",
      password: "MyPassTest1",
      phoneNumber: "00758325825",
    });

    // const users = await User.find({});
    // console.log({users})
    const user = await User.findById(response.body.user._id);
    console.log("user.password", user.password);

    expect(user.password).not.toBe("MyPassTest1");
  });
});

describe("Should login existing user", () => {

  test("Create user and send code 201", async () => {
    await request(app)
      .post("/api/user/login")
      .send({
        email: userOne.email,
      password: userOne.password
      })
      .expect(200);
  });

  
});
describe("Should not login non existing user", () => {
  test('Should respond 404', async () => {
    await request(app)
      .post('/users/login')
      .send({
        email: 'test@gmail.com',
        password: 'serOne.puassword'
      })
      .expect(404);
  });

  test("Create user and send code 201", async () => {
    await request(app)
      .post("/api/user/login")
      .send({
        email: userOne.email,
      password: userOne.password
      })
      .expect(200);
  });

  
});
