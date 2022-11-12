import { Sequelize, DataTypes } from "sequelize";
import database from '../db'
import DisciplinaModel from './DisciplinaModel';
import ProfessorModel from "./ProfessorModel";
import TurmaModel from "./TurmaModel";

const HorarioModel = database.define('horario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dataInicio: {
        type: DataTypes.DATE
    },
    dataFim: {
        type: DataTypes.DATE
    },
    turno: {
        type: DataTypes.STRING
    }

}, { engine: 'innodb' });

DisciplinaModel.hasOne(HorarioModel);
ProfessorModel.hasOne(HorarioModel);
TurmaModel.hasOne(HorarioModel);

export default HorarioModel