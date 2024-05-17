import express, { json } from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import galleryRouter from "./routes/gallery.routes.js";

// Server
const app = express();
const PORT = process.env.PORT ?? 1234;

// Config
dotenv.config();
app.disable("x-powered-by");
app.use("*", corsMiddleware());
app.use(json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);
app.use("/api/gallery", galleryRouter);

export { app, PORT };
