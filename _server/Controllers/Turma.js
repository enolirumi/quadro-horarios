import TurmaModel from "../Models/TurmaModel";
import database from '../db'

export default {
    create: async (name) => {
        return await database.sync().then(async () => {
            return await TurmaModel.create({
                name: name
            })
        })
    },
    update: async (newValue, id) => {
        return await database.sync().then(async () => {
            return await TurmaModel.update(newValue, {
                where: {
                    id: id
                }
            })
        })
    },
    delete: async (id) => {
        return await database.sync().then(async () => {
            return await TurmaModel.destroy({
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