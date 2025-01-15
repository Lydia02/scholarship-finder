import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;

if (!secretKey) {
  throw new Error("JWT_SECRET is not defined in the environment variables");
}

export const generateToken = ({ id, role }) => {
  return jwt.sign(
    { id, role },
    secretKey,
    { expiresIn: "1d" } // Token expires in 1 day
  );
};
