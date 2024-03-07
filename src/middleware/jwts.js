import jwt from "jsonwebtoken";
import User from "../users/model";
import { token } from "morgan";

export const verifyJwt = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  try {
    const verify = await jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) throw err;
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
