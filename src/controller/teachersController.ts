import { Request, Response } from "express";
// const db = require('../database/conexion.js')


 
class TeacherController {
  constructor() {}
  check(req: Request, res:  Response) {
    try {
      res.send('Checking teachers')
    } catch (error) {
      if(error instanceof Error){
        res.status(500).send(error.message);
      }
    }
  }

  joining(req: Request, res:  Response) {
    try {
      const { dni, name, lastname, email } = req.body;
       res.send('joining teacher')
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
       res.send('update teacher')
    } catch (error) {
      if(error instanceof Error){
        res.status(500).send(error.message);
      }
    }
  }

  erase(req: Request, res:  Response) {
    try {
      const { id } = req.params;
      res.send('delete teacher')
    } catch (error) {
      if(error instanceof Error){
        res.status(500).send(error.message);
      }
    }
  }

  checkDetail(req: Request, res:  Response) {
    try {
      const { id } = req.params;
     res.send('Check 1 detail teacher')
    } catch (error) {
      if(error instanceof Error){
        res.status(500).send(error.message);
      }
    }
  }
}

export default new TeacherController();
 