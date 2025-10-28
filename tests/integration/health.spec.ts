import request from "supertest";
import app from "../../src/app";

describe("GET /health", () => {
  it("Dado el endpoint de salud, cuando se consulta, entonces responde 200 y ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });
});
