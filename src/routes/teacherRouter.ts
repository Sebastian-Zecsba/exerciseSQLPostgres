import { Router } from "express";
import { TeacherController } from "../controllers/TeacherController";

const router = Router()

router.get('/', TeacherController.getAllTeacher)
router.post('/', TeacherController.createTeacher)
router.get('/:id', TeacherController.getOneById)
router.delete('/:id', TeacherController.deleteById)
router.put('/:id', TeacherController.updatedById)

export default router