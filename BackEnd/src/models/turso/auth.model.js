import { db } from "./tursoDB.js";
import bcryptjs from "bcryptjs";
import crypto from "node:crypto";

export class AuthModel {
  static async register({ username, email, password }) {
    const userFound = await db.execute({
      sql: "SELECT email FROM user WHERE email = ?",
      args: [email],
    });

    if (userFound.rows.length !== 0) return null;

    const userID = crypto.randomUUID();

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    await db.execute({
      sql: "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)",
      args: [userID, username, email, hashPassword],
    });

    const user = await db.execute({
      sql: "SELECT id FROM user WHERE id = ?",
      args: [userID],
    });

    return user.rows[0];
  }

  static async login(email) {
    const user = await db.execute({
        sql: "SELECT id, password FROM user WHERE email = ?",
        args: [email],
    });

    return user.rows[0];
  }

  static async verifyToken(user) {
    const userFound = await db.execute({
      sql: "SELECT id FROM user WHERE id = ?",
      args: [user.id]
    });

    return userFound.rows[0];
  }
}
