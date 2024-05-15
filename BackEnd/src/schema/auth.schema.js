import { z } from "zod"

// Validation schemas for auth routes
export const registerSchema = z.object({
    username: z.string({
        required_error: "Username is required",
        message: "Invalid username"
    }), 
    email: z.string({
        required_error: "Email is required"
    }).email({
        message: "Invalid email"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters"
    })
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required"
    }).email({
        message: "Invalid email"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters"
    })
});
