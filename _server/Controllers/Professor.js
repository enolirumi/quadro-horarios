import ProfessorModel from "../Models/ProfessorModel";
import database from '../db'

export default {
    create: async (name) => {
        return await database.sync().then(async () => {
            return await ProfessorModel.create({
                name: name
            })
        })
    },
    update: async (newValue, id) => {
        return await database.sync().then(async () => {
            return await ProfessorModel.update(newValue, {
                where: {
                    id: id
                }
            })
        })
    },
    delete: async (id) => {
        return await database.sync().then(async () => {
            return await ProfessorModel.destroy({
                where: {
                    id: id
                }
            })
        })
    },
    deleteByName: async (name) => {
        return await database.sync().then(async () => {
            return await DisciplinaModel.destroy({
                where: {
                    name: name
                }
            })
        })
    }
}