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

describe("test post launches api", () => {
  const launchData = {
    mission: "Ruhul Space Mission",
    rocket: "Rdj Super Rocket",
    launchDate: "December 29,2030",
    destination: "Ruhul-442 b",
  };
  const launchDataWithoutDate = {
    mission: "Ruhul Space Mission",
    rocket: "Rdj Super Rocket",
    destination: "Ruhul-442 b",
  };
  test("it should be return 201 status", async () => {
    const response = await request(app)
      .post("/getLaunches")
      .send(launchData)
      .expect("Content-Type", /json/)
      .expect(201);
    const requestDate = new Date(launchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(requestDate).toBe(responseDate);
    expect(response.body).toMatchObject(launchDataWithoutDate);
  });
   test("it should Catch Missing Property", async () => {
     const response = await request(app)
       .post("/getLaunches")
       .send({})
       .expect("Content-Type", /json/)
       .expect(400);
     expect(response.body).toStrictEqual({
       error: "Some Thing Went Wrong On Lauch Property",
     });
   });
  test("it should Catch Invalid Date Property", async () => {
    const response = await request(app)
      .post("/getLaunches")
      .send(launchDataWithoutDate)
      .expect("Content-Type", /json/)
      .expect(400);
    expect(response.body).toStrictEqual({
      error: "Invalid Launch Date",
    });
  });
});
