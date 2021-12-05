const request = require("supertest");
const Server = require("../models/server");
const server = new Server();
const app = server.app;

describe("GET /API/USER", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/api/user");
    expect(response.status).toBe(200);
  });

  test("should respond with an array", async () => {
    const response = await request(app).get("/api/user");
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("POST /API/USER", () => {
  const newUser = { name: "luis" };

  
  test("should have a content-type: application/json in header", async () => {
    const response = await request(app).post("/api/user");
    expect(response.header["content-type"]).toEqual(
      expect.stringContaining("json")
      );
    });
    
    test("should respond with an user ID", async () => {
      const response = await request(app).post("/api/user").send(newUser);
      expect(response.status).toBe(200);
      expect(response.body.id).toBeDefined();
    });

    test("when name is missing", async () => {
      const response = await request(app).post("/api/user");
      expect(response.status).toBe(400);
    });

});
