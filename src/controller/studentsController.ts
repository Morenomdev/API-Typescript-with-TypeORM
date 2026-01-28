// const db = require('../database/conexion.js');

import { Request, Response } from 'express';
import { Student } from '../models/studentsModel';

class StudentController {
  constructor() {}
  async check(req: Request, res: Response) {
    try {
      const data = await Student.find();
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
      const register = await Student.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error('Student not found');
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
      const { dni, name, lastname, email } = req.body;
      const register = await Student.save(req.body);
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
      const register = await Student.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error('Student not found');
      }
      await Student.update({ id: Number(id) }, req.body);
      const registerUpdate = await Student.findOneBy({ id: Number(id) });
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
      const register = await Student.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error('Student not found');
      }
      await Student.delete({ id: Number(id) });
      res.status(204);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      }
    }
  }
}

export default new StudentController();
