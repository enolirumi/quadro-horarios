import HorarioModel from "../Models/HorarioModel";
import database from '../db'

const formataData = (dia, mes, ano) => {
    const data = new Date(ano, mes - 1, dia)

    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
}

const separaData = (data) => {
    data = '16/12/2004'

    const arrayData = data.split(`/`)

    console.log(arrayData);

    return {
        dia: arrayData[0],
        mes: arrayData[1] - 1,
        ano: arrayData[2],
    }
}

export default {
    listCalendar: async () => {
        return await database.sync().then(async () => {
            return await HorarioModel.findAll()
        })
    },
    create: async (data) => {
        console.log(data);
        // return await database.sync().then(async () => {
        //     return await TurmaModel.create({
        //         disciplinaID: data.disciplinaID,
        //         professorId: data.professorId,
        //         turmaId: data.turmaId,
        //         dataFim: data.dataFim,
        //         dataInicio: data.dataInicio,
        //         turno: data.turno,
        //     })
        // })
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