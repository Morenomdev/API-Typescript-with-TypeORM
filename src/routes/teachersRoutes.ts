import express from 'express';
import teachersController from '../controller/teachersController'
const router = express.Router();

router.get('/', teachersController.check)
router.post('/', teachersController.joining)

router
.route('/:id')
  .get(teachersController.checkDetail)
  .put(teachersController.update)
  .delete(teachersController.erase);

export default router;
 