/* import { GalleryModel } from "../models/mysql/gallery.model.js";  */
import { GalleryModel } from "../models/turso/gallery.model.js";

export class GalleryController {
    static async getPhotos (req, res) {
        try {
            const gallery = await GalleryModel.getPhotos();
            
            return res.json(gallery);
        } catch (error) {
            res
                .status(500)
                .json({ message: error.message })
        }
    }

    static async addPhoto (req, res) {
        const { url, title } = req.body;
    
        const userID = req.user.id;
    
        if (!url || !title) {
            return res
                .status(400)
                .json(["Fields should not be empty"]);
        }
    
        try {
            await GalleryModel.addPhoto({ url, title, userID });
            return res.status(201).json({ status: "OK" });
        } catch (error) {
            res
                .status(500)
                .json({ message: error.message })
        }
    }

    static async deletePhoto (req, res) {
        const { id, password } = req.body;
    
        try {
            if (!id || !password) return res.send(400).json(["Invalid credentials"]);
    
            const user = await GalleryModel.deletePhoto({ id, password });
    
            if (user === "User not found") return res.status(400).json(["User not found"]);
            if (user === "Invalid password") return res.status(401).json(["Invalid password"]);
            return res.status(204).json({ message: "OK" });
        } catch (error) {
            res
                .status(500)
                .json({ message: error.message })
        }
    }
}