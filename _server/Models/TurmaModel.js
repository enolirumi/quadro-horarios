import { Sequelize, DataTypes } from "sequelize";
import database from '../db'

const TurmaModel = database.define('turma', {
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

export default TurmaModel