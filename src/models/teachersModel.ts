import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, BaseEntity } from "typeorm"
import { Course } from "./coursesModel";

@Entity('teachers')
export class Teacher extends BaseEntity {
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

    @OneToMany(() => Course, (course) => course.teacher_id)
    course: Course[]
}