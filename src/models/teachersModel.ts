import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Course } from "./coursesModel";

@Entity('teachers')
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dni: String;

    @Column()
    name: String;

    @Column()
    lastname: String;
    
    @Column()
    email: String;

    @Column()
    profession: String;

    @Column()
    phone: String;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @OneToMany(() => Course, (course) => course.teacher)
    course: Course[]
}