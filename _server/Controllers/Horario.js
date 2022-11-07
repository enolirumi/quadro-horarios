import HorarioModel from "../Models/HorarioModel";
import database from '../db'

export default {
    create: async (disciplinaID, professorId, turmaId) => {
        return await database.sync().then(async () => {
            return await TurmaModel.create({
                disciplinaID: disciplinaID,
                professorId: professorId,
                turmaId: turmaId
            })
        })
    },
    update: async () => {
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
    }
}