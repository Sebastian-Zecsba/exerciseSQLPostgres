import { Request, Response } from "express";
import Student from "../models/Student";

export class StudentController {

    static getAllStudents = async(req: Request, res: Response) => {
        try {

            const getAll = await Student.findAll()
            return res.json(getAll)

        } catch (error) {
            return res.json(error)
        }
    }

    static createStudent = async(req: Request, res: Response) => {
        try {
            
            const studentCreated = await Student.create(req.body)
            return res.json(studentCreated)
        } catch (error) {
            return res.json(error)
            
        }
    }

    static getOneById = async(req: Request, res: Response) => {
        const { id } = req.params;

        try {
            
            const getStudent = await Student.findByPk( id )
            return res.json(getStudent)
        } catch (error) {
            return res.json(error)
        }
    }

    static deleteById = async(req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const studentDeleted = await Student.destroy({where: {id}})
            return res.json(`Student with id ${id} has deleted`)
        } catch (error) {
            return res.json(error)
        }
    }

    static updatedById = async(req: Request, res: Response) => {
        const { id } = req.params;

        try {   
            const studentUpdated = await Student.update(req.body, {where: {id}, returning: true})
            return res.json(studentUpdated[1][0])
        } catch (error) {
            return res.json(error)
        }
    }

}