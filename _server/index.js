import Express from "express";
import cors from 'cors'

import database from './db';
import Professor from './Controllers/Professor'
import Disciplina from './Controllers/Disciplina'
import Turma from './Controllers/Turma'
import Horario from './Controllers/Horario'

const app = Express();
const port = 3001
app.use(cors());
app.use(Express.json());


// ------------------- ListAll


app.get('/professor', async (req, res) => {
    res.status(200).json(JSON.stringify(Professor.listAll()))
})

app.get('/disciplina', async (req, res) => {
    res.status(200).json(JSON.stringify(Disciplina.listAll()))
})

app.get('/turma', async (req, res) => {
    res.status(200).json(JSON.stringify(Turma.listAll()))
})


// -------------------- FindById


app.get('/professor/:id', async (req, res) => {
    const { id } = req.params
    if (id == '' || id == undefined) {
        return res.status(400)
    }

    res.status(200).json(JSON.stringify(Professor.list(id)))
})

app.get('/disciplina/:id', async (req, res) => {
    const { id } = req.params
    if (id == '' || id == undefined) {
        return res.status(400)
    }

    res.status(200).json(JSON.stringify(Disciplina.list(id)))
})

app.get('/turma/:id', async (req, res) => {
    const { id } = req.params
    if (id == '' || id == undefined) {
        return res.status(400)
    }

    res.status(200).json(JSON.stringify(Turma.list(id)))
})


// --------------- FindByName


app.get('/professor/name/:name', async (req, res) => {
    const { name } = req.params
    if (name == '' || name == undefined) {
        return res.status(400)
    }
    
    res.status(200).json(JSON.stringify(Professor.listByName(name)))
})

app.get('/disciplina/name/:name', async (req, res) => {
    const { name } = req.params
    if (name == '' || name == undefined) {
        return res.status(400)
    }
    
    res.status(200).json(JSON.stringify(Disciplina.listByName(name)))
})

app.get('/turma/name/:name', async (req, res) => {
    const { name } = req.params
    if (name == '' || name == undefined) {
        return res.status(400)
    }
    
    res.status(200).json(JSON.stringify(Turma.listByName(name)))
})


// ------------ Create


app.post('/professor', async (req, res) => {
    const { name } = req.body
    console.log(`chegou`);
    if (name == '' || name == undefined) {
        return res.status(400)
    }

    try {
        const result = await Professor.create(req.body)
        return res.status(200).json(JSON.stringify(result))
    } catch(err) {
        return res.status(500).json(JSON.stringify(err))
    }

    return res.status(500)
})

app.post('/disciplina', async (req, res) => {
    const { name } = req.body
    if (name == '' || name == undefined) {
        return res.status(400)
    }

    try {
        const result = await Disciplina.create(req.body)
        return res.status(200).json(JSON.stringify(result))
    } catch(err) {
        return res.status(500).json(JSON.stringify(err))
    }
})

app.post('/turma', async (req, res) => {
    const { name } = req.body
    if (name == '' || name == undefined) {
        return res.status(400)
    }

    try {
        const result = await Turma.create(req.body)
        return res.status(200).json(JSON.stringify(result))
    } catch(err) {
        return res.status(500).json(JSON.stringify(err))
    }
})


// ---------------- Delete


app.delete('/professor/:id', async (req, res) => {
    const { id } = req.params
    if (id == '' || id == undefined) {
        return res.status(400)
    }

    try {
        const result = Professor.create(id)
    } catch(err) {
        return res.status(500).json(JSON.stringify(err))
    }
    
    res.status(200).json(JSON.stringify(result))
})

app.delete('/disciplina/:id', async (req, res) => {
    const { id } = req.params
    if (id == '' || id == undefined) {
        return res.status(400)
    }

    try {
        const result = Disciplina.create(id)
    } catch(err) {
        return res.status(500).json(JSON.stringify(err))
    }
    
    res.status(200).json(JSON.stringify(result))
})

app.delete('/turma/:id', async (req, res) => {
    const { id } = req.params
    if (id == '' || id == undefined) {
        return res.status(400)
    }

    try {
        const result = Turma.create(id)
    } catch(err) {
        return res.status(500).json(JSON.stringify(err))
    }
    
    res.status(200).json(JSON.stringify(result))
})


// ----------------- Update


app.put('/professor/:id', async (req, res) => {
    const { id } = req.params
    if (id == '' || id == undefined) {
        return res.status(400)
    }

    try {
        const result = Professor.update(req.body, id)
    } catch(err) {
        return res.status(500).json(JSON.stringify(err))
    }
    
    res.status(200).json(JSON.stringify(result))
})

app.put('/disciplina/:id', async (req, res) => {
    const { id } = req.params
    if (id == '' || id == undefined) {
        return res.status(400)
    }

    try {
        const result = Disciplina.update(req.body, id)
    } catch(err) {
        return res.status(500).json(JSON.stringify(err))
    }
    
    res.status(200).json(JSON.stringify(result))
})

app.put('/turma/:id', async (req, res) => {
    const { id } = req.params
    if (id == '' || id == undefined) {
        return res.status(400)
    }

    try {
        const result = Turma.update(req.body, id)
    } catch(err) {
        return res.status(500).json(JSON.stringify(err))
    }
    
    res.status(200).json(JSON.stringify(result))
})


app.listen(port, () => {
    console.log('rodando');
})