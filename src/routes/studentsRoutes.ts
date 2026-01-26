import express from 'express';
import studentsController from '../controller/studentsController';
const router = express.Router();

router.get('/', studentsController.check);
router.post('/', studentsController.joining);

router
.route('/:id')
  .get(studentsController.checkDetail)
  .put(studentsController.update)
  .delete(studentsController.erase);
  

  export default router;