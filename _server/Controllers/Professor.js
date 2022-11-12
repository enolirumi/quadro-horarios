import ProfessorModel from "../Models/ProfessorModel";
import database from '../db'

export default {
    create: async (data) => {
        return await database.sync().then(async () => {
            return await ProfessorModel.create(data)
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
            return await ProfessorModel.destroy({
                where: {
                    name: name
                }
            })
        })
    },
    listAll: async () => {
        return await database.sync().then(async () => {
            return await ProfessorModel.findAll()
        })
    },
    list: async (id) => {
        return await database.sync().then(async () => {
            return await ProfessorModel.findAll({
                where: {
                    id: id
                }
            })
        })
    },
    listByName: async (name) => {
        return await database.sync().then(async () => {
            return await ProfessorModel.findAll({
                where: {
                    name: name
                }
            })
        })
    }
}