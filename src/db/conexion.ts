import { DataSource } from "typeorm";
import { Student } from "../models/studentsModel";
import { Teacher } from "../models/teachersModel";
import { Course } from "../models/coursesModel";
import 'dotenv/config';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "courses",
    synchronize: false,
    logging: true,
    entities: [Student, Teacher, Course],
    subscribers: [],
    migrations: [],
})