import { Sequelize, DataTypes } from "sequelize";
import database from '../db'

const ProfessorModel = database.define('professor', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
}, { engine: 'innodb' })

export default ProfessorModel