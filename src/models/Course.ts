import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";

export interface ICourse {
    id?: number;
    name: string;
    description: string;
}

interface CourseCrationAttributes extends Optional<ICourse, 'id'> {}

const Course = sequelize.define<Model<ICourse, CourseCrationAttributes>>('task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Course