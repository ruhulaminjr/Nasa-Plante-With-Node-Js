const app = require("../app");
const request = require("supertest");
describe("test launches get api", () => {
  test("its should return 200 status", async () => {
    const response = await request(app)
      .get("/getplanets")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("test post launches api",()=>{
  const launchData = {
  mission: "Ruhul Space Mission",
  rocket: "Rdj Super Rocket",
  launchDate: new Date("December 27,2030"),
  destination: "Kepler-442 b",
  }
  test("it should be return 201 status",()=>{
    const response
  })
})