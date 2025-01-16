import {
  getScholarshipsHandler,
  createScholarshipHandler,
  updateScholarshipHandler,
  deleteScholarshipHandler,
} from "../../controllers/scholarshipController.js";
import { authenticate } from "../../plugins/auth.js";

async function scholarshipRoutes(fastify, options) {
  fastify.get("/api/scholarships", getScholarshipsHandler);

  fastify.post(
    "/api/scholarships",
    { preHandler: authenticate },
    createScholarshipHandler
  );

  fastify.put(
    "/api/scholarships/:scholarshipId",
    { preHandler: authenticate },
    updateScholarshipHandler
  );

  fastify.delete(
    "/api/scholarships/:scholarshipId",
    { preHandler: authenticate },
    deleteScholarshipHandler
  );
}

export default scholarshipRoutes;
