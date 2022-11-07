import DisciplinaModel from "../Models/DisciplinaModel";
import database from '../db'

export default {
    create: async (name) => {
        return await database.sync().then(async () => {
            return await DisciplinaModel.create({
                name: name
            })
        })
    },
    update: async (newValue, id) => {
        return await database.sync().then(async () => {
            return await DisciplinaModel.update(newValue, {
                where: {
                    id: id
                }
            })
        })
    },
    delete: async (id) => {
        return await database.sync().then(async () => {
            return await DisciplinaModel.destroy({
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