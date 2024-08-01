import express  from "express";
import { connectDB } from "./config/db";
import CourseRouter from "./routes/courseRouter";
import StudentRouter from "./routes/studentRouter";
import TacherRouter from "./routes/teacherRouter";

connectDB()

const app = express()

app.use(express.json())

app.use('/api/courses', CourseRouter)
app.use('/api/students', StudentRouter)
app.use('/api/teachers', TacherRouter)

export default app;