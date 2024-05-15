import { db } from "./local.mysqlDB.js";
import bcryptjs from "bcryptjs";

export class AuthModel {
    static async register ({ username, email, password }) {
        const [userFound] = await db.query(
            `SELECT email FROM user WHERE email = ?`,
            [email]
        );
    
        if (userFound[0]) return null;

        const [uuidResult] = await db.query("SELECT UUID() uuid;");
        const [{ uuid }] = uuidResult;

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);
    
        await db.query(
            `INSERT INTO user (id, username, email, password) VALUES (UUID_TO_BIN("${uuid}"), ?, ?, ?);`,
            [username, email, hashPassword]
        );
    
        const [user] = await db.query(
            "SELECT BIN_TO_UUID(id) id FROM user WHERE id = UUID_TO_BIN(?);",
            [uuid]
        );
    
        return user[0];
    }

    static async login (email) {
        const [user] = await db.query(
            "SELECT BIN_TO_UUID(id) id, password FROM user WHERE email = ?;",
            [email]
        );
    
        return user[0];
    }

    static async verifyToken (user) {
        const [userFound] = await db.query(
            "SELECT BIN_TO_UUID(id) id FROM user WHERE id = UUID_TO_BIN(?)",
            [user.id]
        );

        return userFound[0];
    }
}
