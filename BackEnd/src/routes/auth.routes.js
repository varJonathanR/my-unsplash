// Auth routes
import { Router } from "express";
import { AuthController } from "../controller/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schema/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), AuthController.register);
router.post("/login", validateSchema(loginSchema), AuthController.login);
router.post("/logout", AuthController.logout);

router.get("/verify", AuthController.verifyToken);

export default router;
