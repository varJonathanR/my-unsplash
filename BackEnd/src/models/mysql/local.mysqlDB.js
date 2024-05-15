import mysql2 from "mysql2/promise";
import dotenv from "dotenv"

dotenv.config();

const config = {
    host: "localhost",
    user: "root",
    port: 3306,
    password: process.env.LOCAL_DATABASE_PASSWORD ?? "",
    database: process.env.LOCAL_DATABASE_NAME ?? "",
};

export const db = await mysql2.createConnection(config);
