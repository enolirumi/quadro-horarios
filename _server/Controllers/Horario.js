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
    create: async (data) => {

        console.log(data);

        const disponibilidadeTurno = await database.sync().then(async () => {
            return await TurmaModel.findAll({
                where: {
                    professorId: data.professorId,
                    turno: data.turno,
                }
            })
        })

        console.log(disponibilidadeTurno);

        if(disponibilidadeTurno.length > 0) {
            return {
                mensageError: 'Este professor não está disponível para este horário'
            }
        }

        // const disponibilidadeData = 

        // if() {

        // }

        // return await database.sync().then(async () => {
        //     return await TurmaModel.create({
        //         disciplinaID: disciplinaID,
        //         professorId: professorId,
        //         turmaId: turmaId
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