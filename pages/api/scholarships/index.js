import {
  getScholarshipsHandler,
  createScholarshipHandler,
  updateScholarshipHandler,
  deleteScholarshipHandler,
} from "../../controllers/scholarshipController";
import {
  handleBadRequestError,
  handleMethodNotAllowedError,
} from "../../utils/error";
import { authenticate } from "../../plugins/auth";

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      await authenticate(req, res);
    }

    const isAdmin = req.user?.role === "admin";

    switch (req.method) {
      case "GET":
        return await getScholarshipsHandler(req, res);

      case "POST":
        if (!isAdmin) {
          return res
            .status(403)
            .json(
              handleBadRequestError(
                "Forbidden: Only admins can create scholarships"
              )
            );
        }
        return await createScholarshipHandler(req, res);

      case "PUT":
      case "PATCH":
        if (!isAdmin) {
          return res
            .status(403)
            .json(
              handleBadRequestError(
                "Forbidden: Only admins can update scholarships"
              )
            );
        }
        return await updateScholarshipHandler(req, res);

      case "DELETE":
        if (!isAdmin) {
          return res
            .status(403)
            .json(
              handleBadRequestError(
                "Forbidden: Only admins can delete scholarships"
              )
            );
        }
        return await deleteScholarshipHandler(req, res);

      default:
        return res.status(405).json(handleMethodNotAllowedError(req.method));
    }
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
      error: error.message,
    });
  }
}
