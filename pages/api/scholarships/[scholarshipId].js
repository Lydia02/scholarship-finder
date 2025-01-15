import {
  getScholarshipHandler,
  updateScholarshipHandler,
  deleteScholarshipHandler,
} from "../../controllers/scholarshipController";
import {
  handleBadRequestError,
  handleMethodNotAllowedError,
  handleInternalServerError,
} from "../../utils/error";
import { authenticate } from "../../plugins/auth";

export default async function handler(req, res) {
  const { scholarshipId } = req.query;

  try {
    // Only authenticate if the request is not a GET
    if (req.method !== "GET") {
      await authenticate(req, res);
    }

    const isAdmin = req.user?.role === "admin";

    switch (req.method) {
      case "GET":
        return await getScholarshipHandler(req, res);

      case "PUT":
        if (!isAdmin) {
          return res
            .status(403)
            .json(handleBadRequestError("Forbidden: Only admins can update scholarships"));
        }
        return await updateScholarshipHandler(req, res);

      case "DELETE":
        if (!isAdmin) {
          return res
            .status(403)
            .json(handleBadRequestError("Forbidden: Only admins can delete scholarships"));
        }
        return await deleteScholarshipHandler(req, res);

      default:
        return res.status(405).json(handleMethodNotAllowedError(req.method));
    }
  } catch (error) {
    console.error("Error in scholarship handler:", error.message);
    return res.status(500).json(handleInternalServerError(error.message));
  }
}
