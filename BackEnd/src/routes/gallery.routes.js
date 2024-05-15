import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { GalleryController } from "../controller/gallery.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { addSchema, deleteSchema } from "../schema/gallery.schema.js";

const router = Router();

router.get("/getall", GalleryController.getPhotos);
router.post("/add", authRequired, validateSchema(addSchema), GalleryController.addPhoto);
router.delete("/delete", authRequired, validateSchema(deleteSchema), GalleryController.deletePhoto);

export default router;
