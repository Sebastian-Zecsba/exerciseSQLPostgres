import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";

export interface ITeacher {
    id?: number;
    name: string;
    email: string;
}

interface TeacherCreationAttributes extends Optional<ITeacher, 'id'> {}

const Teacher = sequelize.define<Model <ITeacher, TeacherCreationAttributes>>('teacher', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Teacher