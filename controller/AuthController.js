import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Users from "../models/Users.js";
import { config } from "dotenv";
import process from "process";
config();
async function register(req, res) {
  try {
    const { username, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await Users.create({
      username,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(500).send("Error registering new user");
  }
}

async function login(req, res) {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).send("Invalid credentials");
    }
    const token = jwt.sign({ userId: user.id }, process.env.AUTH_SECRET_KEY, {
        expiresIn: "24h",
    });
    res.status(200).json({ token });
}

export default { register, login };
