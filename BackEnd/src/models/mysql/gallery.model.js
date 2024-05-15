import { db } from "./local.mysqlDB.js";
import bcryptjs from "bcryptjs";

export class GalleryModel {
    static async getPhotos () {
        const [gallery] = await db.query(
            "SELECT BIN_TO_UUID(id) id, url, title FROM gallery;"
        );

        return gallery
    }

    static async addPhoto ({ url, title, userID }) {
        // Generate UUID form photo
        const [uuidResult] = await db.query("SELECT UUID() uuid;")
        const [{ uuid }] = uuidResult;

        await db.query(
            `INSERT INTO gallery (id, user_id, url, title) VALUES (
                UUID_TO_BIN("${uuid}"), (SELECT id FROM user WHERE id = UUID_TO_BIN("${userID}")), ?, ?
            );`,
            [url, title]
        );
    }

    static async deletePhoto ({ id, password }) {
        const [user] = await db.query(
            "SELECT u.password FROM user u JOIN gallery g ON u.id = g.user_id WHERE g.id = UUID_TO_BIN(?);",
            [id]
        );

        if (!user) return "User not found";

        const photoPassword = user[0].password;

        const isMatch = await bcryptjs.compare(password, photoPassword);
        if (!isMatch) return "Invalid password";

        await db.query(
            "DELETE FROM gallery WHERE id = UUID_TO_BIN(?);",
            [id]
        );
    }
}
