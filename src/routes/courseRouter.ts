import { Router } from "express";
import { CourseController } from "../controllers/CourseController";


const router = Router()

router.get('/', CourseController.getAllCourses)
router.post('/', CourseController.createCourse)
router.get('/:id', CourseController.getOneById)
router.delete('/:id', CourseController.deleteById)
router.put('/:id', CourseController.updatedById)


export default router