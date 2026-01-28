// const db = require('../database/conexion.js');

import { Request, Response } from 'express';
import { Course } from '../models/coursesModel';
import { Teacher } from '../models/teachersModel';
import { Student } from '../models/studentsModel';

class CourseController {
  constructor() {}
  async check(req: Request, res: Response) {
    try {
      const data = await Course.find({
        relations: { teacher_id: true, students: true },
      });
      res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      }
    }
  }

  async checkDetail(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const register = await Course.findOne({
        where: { id: Number(id) },
        relations: { teacher_id: true, students: true },
      });
      if (!register) {
        throw new Error('Course not found');
      }
      res.status(200).json(register);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      }
    }
  }

  async joining(req: Request, res: Response) {
    try {
      const { teacher_id } = req.body;
      const teacher = await Teacher.findOneBy({ id: Number(teacher_id) });
      if (!teacher) {
        throw new Error('Teacher not found');
      }
      const register = await Course.save(req.body);
      res.status(201).json(register);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      }
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { teacher_id } = req.body;
      const teacher = await Teacher.findOneBy({ id: Number(teacher_id) });
      if (!teacher) {
        throw new Error('Teacher not found');
      }
      const register = await Course.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error('Course not found');
      }
      await Course.update({ id: Number(id) }, req.body);
      const registerUpdate = await Course.findOne({
        where: { id: Number(id) },
        relations: { teacher_id: true, students: true },
      });
      res.status(200).json(registerUpdate);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      }
    }
  }

  async erase(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const register = await Course.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error('Course not found');
      }
      await Course.delete({ id: Number(id) });
      res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      }
    }
  }

  async associateStudent(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { students_id, course_id } = req.body;
      const student = await Student.findOneBy({ id: Number(students_id) });
      const course = await Course.findOneBy({ id: Number(course_id) });
      if (!course) throw new Error('Course not found');
      if (!student) throw new Error('Student not found');
      course.students = course.students || []
      course.students.push(student)
      const register = await Course.save(course)
      res.status(200).json(register)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      }
    }
  }
}

export default new CourseController();
