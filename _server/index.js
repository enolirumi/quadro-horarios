import Express from "express";
import cors from 'cors'


import database from './db';
import Professor from './Controllers/Professor'
import Horario from './Controllers/Horario'
import Disciplina from './Controllers/Disciplina'
import Turma from './Controllers/Turma'

const app = Express();
const port = 8080
app.use(cors());
app.use(Express.json());

app.post('/', async (req, res) => {
    
})

app.listen(port)