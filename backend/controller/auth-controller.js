import User from "../models/user-model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  const jwtSecret = process.env.JWT_SECRET || "secret";
  let token = jwt.sign({ id: userId }, jwtSecret, { expiresIn: "1d" });
  return token;
};

// register
export const registerUser = async (req, res) => {
  try {
    console.log("Signup request received:", req.body);
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      console.log("Missing fields");
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const userExists = await User.findOne({ email });
    console.log("User exists check:", userExists);

    if (userExists) {
      console.log("User already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10); // abc =? ouiahsfh89q3hon
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    console.log("User created:", user);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.log("Signup error:", error);
    res.status(500).json({ message: error.message });
  }
};

// login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt:", { email, passwordProvided: !!password });

    const user = await User.findOne({ email });
    console.log("Login user found:", !!user);

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: error.message });
  }
};
