import { db } from "./tursoDB.js";
import bcryptjs from "bcryptjs";
import crypto from "node:crypto";

export class GalleryModel {
    static async getPhotos () {
        const gallery = await db.execute({
            sql: "SELECT id, url, title FROM gallery",
            args: []
        });

        return gallery.rows;
    }

    static async addPhoto ({ url, title, userID }) {
        const photoID = crypto.randomUUID();

        await db.execute({
            sql: `INSERT INTO gallery (id, user_id, url, title) VALUES (
                ?, (SELECT id FROM user WHERE id = ?), ?, ?
            )`,
            args: [photoID, userID, url, title]
        });
    }

    static async deletePhoto ({ id, password }) {
        const user = await db.execute({
            sql: "SELECT u.password FROM user u JOIN gallery g ON u.id = g.user_id WHERE g.id = ?",
            args: [id]
        });

        if (user.rows === 0) return "User not found";

        const photoPassword = user.rows[0].password;

        const isMatch = await bcryptjs.compare(password, photoPassword);
        if (!isMatch) return "Invalid password";

        await db.execute({
            sql: "DELETE FROM gallery WHERE id = ?",
            args: [id]
        });
    }
}
