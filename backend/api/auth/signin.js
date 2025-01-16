import { generateToken } from "../../utils/jwt";
import {
  handleBadRequestError,
  handleMethodNotAllowedError,
} from "../../utils/error";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // Hard-coded admin credentials
    const ADMIN_USERNAME = "admin";
    const ADMIN_PASSWORD = "admin123";

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const token = generateToken({ id: 1, role: "admin" });
      return res.status(200).json({ message: "Login successful", token });
    }

    return res.status(401).json(handleBadRequestError("Invalid credentials"));
  }

  return res.status(405).json(handleMethodNotAllowedError(req.method));
}
