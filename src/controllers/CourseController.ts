import { Request, Response } from "express";
import Course from "../models/Course";

export class CourseController {

    static getAllCourses = async (req: Request, res: Response) => {
        try {
            const allCourses = await Course.findAll()
            return res.json(allCourses)
        } catch (error) {
            return res.json(error)
        }
    }

    static createCourse = async(req: Request, res: Response) => {
        try {
            const createdCourse = await Course.create(req.body)
            console.log('Course created')
            return res.json(createdCourse)
        } catch (error) {
            return res.json(error)
        }
    }

    static getOneById = async(req: Request, res: Response) => {

        const { id } = req.params;

        try {
            const getCourse = await Course.findByPk(id)
            return res.json(getCourse)

        } catch (error) {
            return res.json(error)
        }
    }

    static deleteById = async(req: Request, res: Response) => {
        const { id } = req.params;

        try {

            const deleted = await Course.destroy({where: {id}})
            return res.json(`User with id: ${id} has deleted`)

        } catch (error) {
            return res.json(error)
        }
    }

    static updatedById = async(req: Request, res: Response) => {
        const { id } = req.params;
        
        try {
            const courseUpdated = await Course.update(req.body, {where: {id}, returning: true})
            return res.json(courseUpdated[1][0])
        } catch (error) {
            return res.json(error)
        }
    }
}