// import {
//   getScholarshipsHandler,
//   createScholarshipHandler,
//   updateScholarshipHandler,
//   deleteScholarshipHandler,
// } from "../controllers/scholarshipController.js";
// import { authenticate } from "../plugins/auth.js";

// const scholarshipRoutes = (fastify, opts, done) => {
//   // Public Route
//   fastify.get("/api/scholarships", getScholarshipsHandler);

//   // Admin Routes
//   fastify.post("/api/scholarships", { preHandler: authenticate }, async (req, res) => {
//     const isAdmin = req.user?.role === "admin";
//     if (!isAdmin) {
//       return res.status(403).send(handleBadRequestError("Forbidden: Only admins can create scholarships"));
//     }
//     return await createScholarshipHandler(req, res);
//   });

//   fastify.put("/api/scholarships/:scholarshipId", { preHandler: authenticate }, async (req, res) => {
//     const isAdmin = req.user?.role === "admin";
//     if (!isAdmin) {
//       return res.status(403).send(handleBadRequestError("Forbidden: Only admins can update scholarships"));
//     }
//     return await updateScholarshipHandler(req, res);
//   });

//   fastify.delete("/api/scholarships/:scholarshipId", { preHandler: authenticate }, async (req, res) => {
//     const isAdmin = req.user?.role === "admin";
//     if (!isAdmin) {
//       return res.status(403).send(handleBadRequestError("Forbidden: Only admins can delete scholarships"));
//     }
//     return await deleteScholarshipHandler(req, res);
//   });

//   done();
// };

// export default scholarshipRoutes;
