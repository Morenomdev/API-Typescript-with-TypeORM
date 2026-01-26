import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Teacher } from './teachersModel';
import { Student } from './studentsModel';

@Entity('courses')
export class Course {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  @Column('text')
  description: String;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne(() => Teacher, (teacher) => teacher.course)
  @JoinColumn({ name: 'teacher_id'})
  teacher: Teacher[]

  @ManyToMany(() => Student)
  @JoinTable({
    name: 'courses_students',
    joinColumn: { name: 'course_id'},
    inverseJoinColumn: { name: 'students_id'} 
  })
  students: Student[];
}