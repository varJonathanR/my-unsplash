import { z } from "zod"

// Validation schemas for gallery routes
export const addSchema = z.object({
    url: z.string({
        required_error: "URL required"
    }),
    title: z.string({
        required_error: "Title required"
    })
});

export const deleteSchema = z.object({
    id: z.string({
        required_error: "Photo ID required",
    }),
    password: z.string({
        required_error: "Password required"
    })
});
