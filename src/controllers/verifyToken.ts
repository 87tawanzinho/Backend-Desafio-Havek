const dotenv = require("dotenv");
import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  const tokenHeader = req.headers["authorization"];
  const token = tokenHeader && tokenHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Not autorized" });
  }

  try {
    jwt.verify(token, process.env.SECRET);
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
