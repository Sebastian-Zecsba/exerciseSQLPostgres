import { Request, Response } from "express";
import Teacher from "../models/Teacher";

export class TeacherController {

    static getAllTeacher = async(req: Request, res: Response) => {
        try {
            const getAll = await Teacher.findAll()
            return res.json(getAll)
        } catch (error) {
            return res.json(error)
        }
    }

    static createTeacher = async(req: Request, res: Response) => {
        try {
            const teacherCreated = await Teacher.create(req.body)
            return res.json(teacherCreated)

        } catch (error){
            return res.json(error)
        }
    }

    static getOneById = async(req: Request, res: Response) => {

        const { id } = req.params;

        try {
            const getTeacher = await Teacher.findByPk(id)
            return res.json(getTeacher)
        } catch (error) {
            return res.json(error)
        }
    }

    static deleteById = async(req: Request, res: Response) => {
        const { id } = req.params;

        try {

            const teacherDeleted = await Teacher.destroy({where: {id}})
            return res.json(`Teacher with id ${id} has deleted `)
        } catch (error) {
            return res.json(error)    
        }
    }

    static updatedById = async(req: Request, res: Response) => {
        const { id } = req.params;

        try {
            
            const teacherUpdated = await Teacher.update(req.body , {where: {id}, returning: true})
            return res.json(teacherUpdated[1][0])
        } catch (error) {
            return res.json(error)     
        }
    }

}