const request = require("supertest");
const app = require("../app");

describe("Web application", () => {
    test("GET / should return the application message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe(
            "Hello from my DevOps CI application!"
        );
    });

    test("GET /health should return UP status", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("UP");
    });
});
