import TurmaModel from "../Models/TurmaModel";
import database from '../db'

export default {
    create: async (data) => {
        return await database.sync({force: true}).then(async () => {
            return await TurmaModel.create(data)
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
            return await TurmaModel.destroy({
                where: {
                    name: name
                }
            })
        })
    },
    listAll: async () => {
        return await database.sync().then(async () => {
            return await TurmaModel.findAll()
        })
    },
    list: async (id) => {
        return await database.sync().then(async () => {
            return await TurmaModel.findAll({
                where: {
                    id: id
                }
            })
        })
    },
    listByName: async (name) => {
        return await database.sync().then(async () => {
            return await TurmaModel.findAll({
                where: {
                    name: name
                }
            })
        })
    }
}