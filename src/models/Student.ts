import { DataTypes, Optional, Model } from "sequelize";
import { sequelize } from "../config/db";

export interface IStudent {
    id?: number;
    name: string;
    email: string;
}

interface StudentCreationAttributes extends Optional<IStudent, 'id'> {}

const Student = sequelize.define<Model <IStudent, StudentCreationAttributes>>('student', {
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

export default Student