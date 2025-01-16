import jwt from "jsonwebtoken";
import { handleBadRequestError } from "../utils/error.js";

export async function authenticate(req, res) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json(handleBadRequestError("Authorization token is missing"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    console.error("Token verification error:", err.message);
    return res
      .status(403)
      .json(handleBadRequestError("Invalid or expired token"));
  }
}
