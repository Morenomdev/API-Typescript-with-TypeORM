import { Request, Response } from "express";

// const db = require('../database/conexion.js')


class CoursesController {
  constructor() {

  }
   check(req: Request, res:  Response) {
     try {
       res.send('Checking courses')
     } catch (error) {
       if(error instanceof Error){
         res.status(500).send(error.message);
       }
     }
   }
 
   joining(req: Request, res:  Response) {
     try {
       const { dni, name, lastname, email } = req.body;
        res.send('joining course')
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
        res.send('update course')
     } catch (error) {
       if(error instanceof Error){
         res.status(500).send(error.message);
       }
     }
   }
 
   erase(req: Request, res:  Response) {
     try {
       const { id } = req.params;
       res.send('delete')
     } catch (error) {
       if(error instanceof Error){
         res.status(500).send(error.message);
       }
     }
   }
 
   checkDetail(req: Request, res:  Response) {
     try {
       const { id } = req.params;
      res.send('Check detail')
     } catch (error) {
       if(error instanceof Error){
         res.status(500).send(error.message);
       }
     }
   }
 
 

   associateStudent(req: Request, res:  Response)  {
    try {
      const {course_id, students_id } = req.body;
       res.send('associate course')
      // db.query(
      //   `INSERT INTO courses_students
      //           (course_id, students_id)
      //           VALUES(?, ?);`,
      //   [course_id, students_id],
      //   (error, rows) => {
      //     if (error) {
      //       res.status(400).send(error);
      //     } else {
            
      //       res.status(201).json({msg: 'Student associate with a course'});
      //     }
      //   },
      // );
    } catch (error) {
      if(error instanceof Error){
         res.status(500).send(error.message);
       }
      // // console.log(error);
      // res.status(500).send(error.message);
    }
  }


}

export default new CoursesController();
