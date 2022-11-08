import DisciplinaModel from "../Models/DisciplinaModel";
import database from '../db'

export default {
    create: async (data) => {
        return await database.sync({force: true}).then(async () => {
            return await DisciplinaModel.create(data)
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
    },
    listAll: async () => {
        return await database.sync().then(async () => {
            return await DisciplinaModel.findAll()
        })
    },
    list: async (id) => {
        return await database.sync().then(async () => {
            return await DisciplinaModel.findAll({
                where: {
                    id: id
                }
            })
        })
    },
    listByName: async (name) => {
        return await database.sync().then(async () => {
            return await DisciplinaModel.findAll({
                where: {
                    name: name
                }
            })
        })
    }
}