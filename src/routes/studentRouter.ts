import { Router } from "express";
import { StudentController } from "../controllers/StudentController"

const router = Router()

router.get('/', StudentController.getAllStudents)
router.post('/', StudentController.createStudent)
router.get('/:id', StudentController.getOneById)
router.delete('/:id', StudentController.deleteById)
router.put('/:id', StudentController.updatedById)

export default router