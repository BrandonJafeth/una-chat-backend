import request from "supertest";
import app from "../../src/app";

describe("GET /api/health", () => {
  it("Dado el endpoint de salud, cuando se consulta, entonces responde 200 y ok", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('uptime');
    expect(res.body).toHaveProperty('message', 'OK');
    expect(res.body).toHaveProperty('timestamp');
  });
});
