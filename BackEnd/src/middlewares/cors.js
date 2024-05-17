import cors from "cors";

const ACCEPTED_ORIGINS = [
    "http://localhost:1234",
    "http://localhost:4321",
    "https://my-unsplash-varjonathanr.vercel.app",
    process.env.PRODUCTION_API
];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
    origin: (origin, callback) => {
        if (acceptedOrigins.includes(origin)) return callback(null, true);

        if (!origin) return callback(null, true);

        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true
});
