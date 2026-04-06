import jwt from "jsonwebtoken";
import User from "../models/user-model.js";

// Middleware to protect routes
export const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
      const jwtSecret = process.env.JWT_SECRET || "secret";

      const decoded = jwt.verify(token, jwtSecret);
      const userId = decoded.id || decoded.userId;

      req.user = await User.findById(userId).select("-password");

      next();
    } else {
      res.status(401).json({ message: "Not authorized, no token" });
    }
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not authorized, invalid token" });
  }
};
