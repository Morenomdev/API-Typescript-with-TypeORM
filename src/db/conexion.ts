import { DataSource } from "typeorm";
import { Student } from "../models/studentsModel";
import { Teacher } from "../models/teachersModel";
import { Course } from "../models/coursesModel";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "courses",
    synchronize: false,
    logging: true,
    entities: [Student, Teacher, Course],
    subscribers: [],
    migrations: [],
})