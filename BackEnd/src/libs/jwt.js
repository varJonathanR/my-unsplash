import jwt from "jsonwebtoken";

export function createAccessToken(payload) {
    // Generate token (jsonwebtoken)
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION },
            (error, token) => {
                if (error) reject(error);
                resolve(token);
            }
        );
    })
}
