// const db = require('../database/conexion.js');

import { Request, Response } from 'express';
import { Teacher } from '../models/teachersModel';

class TeacherController {
  constructor() {}
  async check(req: Request, res: Response) {
    try {
      const data = await Teacher.find();
      res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      }
    }
  }

  async checkDetail(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const register = await Teacher.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error('Teacher not found');
      }
      res.status(200).json(register);
      res.send('Check 1 student');
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      }
    }
  }

  async joining(req: Request, res: Response) {
    try {
      const { dni, name, lastname, email } = req.body;
      const register = await Teacher.save(req.body);
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
      const register = await Teacher.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error('Teacher not found');
      }
      await Teacher.update({ id: Number(id) }, req.body);
      const registerUpdate = await Teacher.findOneBy({ id: Number(id) });
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
      const register = await Teacher.findOneBy({ id: Number(id) });
      if (!register) {
        throw new Error('Teacher not found');
      }
      await Teacher.delete({ id: Number(id) });
      res.status(204);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      }
    }
  }
}

export default new TeacherController();
