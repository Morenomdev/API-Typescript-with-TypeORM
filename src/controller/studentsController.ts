// const db = require('../database/conexion.js'); 

import { Request, Response } from "express";
import { Student } from "../models/studentsModel";

class StudentController {
  constructor() {}
  check(req: Request, res:  Response) {
    try {
      const data = await Student.
    } catch (error) {
      if(error instanceof Error){
        res.status(500).send(error.message);
      }
    }
  }

  joining(req: Request, res:  Response) {
    try {
      const { dni, name, lastname, email } = req.body;
       res.send('joining student')
    } catch (error) {
      if(error instanceof Error){
        res.status(500).send(error.message);
      }
    }
  }

  update(req: Request, res:  Response) {
    try {
      const { id } = req.params;
      const { dni, name, lastname, email } = req.body;
       res.send('update student')
    } catch (error) {
      if(error instanceof Error){
        res.status(500).send(error.message);
      }
    }
  }

  erase(req: Request, res:  Response) {
    try {
      const { id } = req.params;
      res.send('delete student')
    } catch (error) {
      if(error instanceof Error){
        res.status(500).send(error.message);
      }
    }
  }

  checkDetail(req: Request, res:  Response) {
    try {
      const { id } = req.params;
     res.send('Check 1 student')
    } catch (error) {
      if(error instanceof Error){
        res.status(500).send(error.message);
      }
    }
  }
}

export default new StudentController();
