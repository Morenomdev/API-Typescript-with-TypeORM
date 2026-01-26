import express from 'express';
import coursesController from '../controller/coursesController'
const router = express.Router();

router.get('/', coursesController.check);
router.post('/', coursesController.joining);
router.post('/registerStudent', coursesController.associateStudent);

router
.route('/:id')
  .get(coursesController.checkDetail)
  .put(coursesController.update)
  .delete(coursesController.erase);
  

  export default router;