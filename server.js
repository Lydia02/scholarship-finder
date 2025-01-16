import "dotenv/config";
import { fastify, startServer, prisma } from "./fastify.js";

import scholarshipRoutes from "./backend/api/scholarships/index.js";

import cors from "cors";

fastify.register(cors, {
  origin: "http://localhost:3000", // Frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  credentials: true, // Allow cookies and headers
});

fastify.register(scholarshipRoutes);
fastify.get("/", async (request, reply) => {
  return { message: "Welcome to Scholarship Finder API" };
});

startServer();
