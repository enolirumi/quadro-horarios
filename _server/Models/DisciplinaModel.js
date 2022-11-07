import { Sequelize, DataTypes } from "sequelize";
import database from '../db'

const DisciplinaModel = database.define('disciplina', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
})

export default DisciplinaModel