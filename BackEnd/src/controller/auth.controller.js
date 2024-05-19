/* import { AuthModel } from "../models/mysql/auth.model.js";  */
import { AuthModel } from "../models/turso/auth.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { createAccessToken } from "../libs/jwt.js";

const cookieOptions = {
  expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRATION * 24 * 60 * 60 * 1000),
  secure: true,
  sameSite: "None"
};

export class AuthController {
  static async register (req, res) {
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) return res.status(400).json(["Fields should not be empty"]);
  
    try {
      const userSaved = await AuthModel.register({ username, email, password });

      if (!userSaved) return res.status(400).json(["User already exist"]);

      const token = await createAccessToken({ id: userSaved.id });
  
      res.status(200).cookie("token", token, cookieOptions);
      res.status(200).json({ message: "OK" });
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message });
    }
  }

  static async login (req, res) {
    const { email, password } = req.body;
  
    if (!email || !password) return res.status(400).json(["Fields should not be empty"])
  
    try {
      const user = await AuthModel.login(email);
  
      if (!user) return res.status(400).json(["Invalid credentail"]);
      const isMatch = await bcryptjs.compare(password, user.password);

      if (!isMatch) return res.status(400).json(["Invalid credentail"]);
      
      const token = await createAccessToken({ id: user.id });
  
      res.status(200).cookie("token", token, cookieOptions);
      res.status(200).json({ message: "OK" });
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message });
    }
  }

  static logout (req, res) {
    res.cookie("token", "", {
      expires: new Date(0)
    });
  
    return res.status(200).json({ message: "OK" });
  }

  static async verifyToken (req, res) {
    const { token } = req.cookies;
  
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    
    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
      if (err) return res.status(401).json({ message: "Unauthorized" });
  
      try {
        const userFound = await AuthModel.verifyToken(user);
  
        if(!userFound) return res.status(401).json({ message: "Unauthorized" });
    
        return res.status(200).json({ message: "OK" });
      } catch (error) {
        res
          .status(500)
          .json({ message: error.message });
      }
    });
  }
}
