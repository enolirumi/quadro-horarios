import styles from './Styles.module.scss'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { IMaskInput } from 'react-imask';

const Home = () => {

    const api_url = 'http://localhost:3001'

    const API = axios.create({
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const cadastraProfessor = async () => {
        const res = await API.post(`${api_url}/professor`, {
            name: nomeProfessor,
        }).then((res) => {
            return res
        })

        const professores = await API.get(`${api_url}/professor`).then((res) => {
            return JSON.parse(res.data);
        })
        setProfessores(professores);
    }

    const cadastraDisciplina = async () => {
        const res = await API.post(`${api_url}/disciplina`, {
            name: nomeDisciplina,
        }).then((res) => {
            return res
        })

        const disciplinas = await API.get(`${api_url}/disciplina`).then((res) => {
            return JSON.parse(res.data);
        })
        setDisciplinas(disciplinas);
    }

    const cadastraTurma = async () => {
        const res = await API.post(`${api_url}/turma`, {
            name: nomeTurma,
        }).then((res) => {
            return res
        })

        const turmas = await API.get(`${api_url}/turma`).then((res) => {
            return JSON.parse(res.data);
        })
        setTurmas(turmas);
    }

    const cadastraHorario = async () => {

        const res = await API.post(`${api_url}/horario`, {
            disciplinaID: disciplinaHorario,
            turmaID: turmaHorario,
            professorID: professorHorario,
            turno: turnoHorario,
            dataInicio: dataInicio,
            dataFim: dataFim
        }).then((res) => {
            return res
        })

        console.log(disciplinaHorario);
    }

    const [nomeProfessor, setNomeProfessor] = useState('')
    const [nomeTurma, setNomeTurma] = useState('')
    const [nomeDisciplina, setNomeDisciplina] = useState('')

    const [professores, setProfessores] = useState([])
    const [turmas, setTurmas] = useState([])
    const [disciplinas, setDisciplinas] = useState([])

    const [disciplinaHorario, setDisciplinaHorario] = useState('')
    const [turmaHorario, setTurmaHorario] = useState('')
    const [professorHorario, setProfessorHorario] = useState('')
    const [turnoHorario, setTurnoHorario] = useState('')
    const [dataInicio, setDataInicio] = useState('')
    const [dataFim, setDataFim] = useState('')

    const [modal, setModal] = useState(false)

    useEffect(() => {
        (async () => {
            const professores = await API.get(`${api_url}/professor`).then((res) => {
                return JSON.parse(res.data);
            })
            const turmas = await API.get(`${api_url}/turma`).then((res) => {
                return JSON.parse(res.data);
            })
            const disciplinas = await API.get(`${api_url}/disciplina`).then((res) => {
                return JSON.parse(res.data);
            })
            setProfessores(professores);
            setDisciplinas(disciplinas);
            setTurmas(turmas);
        })()
    }, [])

    return (
        <>
            {modal && <div className={styles['modal']}></div>}
            <section className={styles['section-cadastro-infos']}>
                <div className={`${styles['box']}`}>
                    <h3>Cadastro de professor</h3>
                    <div className={styles['line']}>
                        <input type="text" placeholder='Nome do professor:' onChange={(e) => setNomeProfessor(e.target.value)} value={nomeProfessor} />
                    </div>
                    <div className={styles['btn-cadastrar']} onClick={() => cadastraProfessor()}>Cadastrar</div>
                </div>
                <div className={`${styles['box']}`}>
                    <h3>Cadastro de Disciplina</h3>
                    <div className={styles['line']}>
                        <input type="text" placeholder='Nome da disciplina:' onChange={(e) => setNomeDisciplina(e.target.value)} value={nomeDisciplina} />
                    </div>
                    <div className={styles['btn-cadastrar']} onClick={() => cadastraDisciplina()}>Cadastrar</div>
                </div>
                <div className={`${styles['box']}`}>
                    <h3>Cadastro de Turma</h3>
                    <div className={styles['line']}>
                        <input type="text" placeholder='Nome da turma:' onChange={(e) => setNomeTurma(e.target.value)} value={nomeTurma} />
                    </div>
                    <div className={styles['btn-cadastrar']} onClick={() => cadastraTurma()}>Cadastrar</div>
                </div>
            </section>
            <section className={styles['section-cadastro-horarios']}>
                <h3>Cadastro de Hor??rios</h3>
                <div className={styles['div-cadastro-horarios']}>
                    <div>
                        <h5>Professor:</h5>
                        <select name="" id="" onChange={(e) => setProfessorHorario(e.target.value)}>
                            <option value="">Selecione</option>
                            {professores.map((e) => {
                                return <option value={e.id} key={e.id}>{e.name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <h5>Disciplina:</h5>
                        <select name="" id="" onChange={(e) => setDisciplinaHorario(e.target.value)}>
                            <option value="">Selecione</option>
                            {disciplinas.map((e) => {
                                return <option value={e.id} key={e.id}>{e.name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <h5>Turma:</h5>
                        <select name="" id="" onChange={(e) => setTurmaHorario(e.target.value)}>
                            <option value="">Selecione</option>
                            {turmas.map((e) => {
                                return <option value={e.id} key={e.id}>{e.name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <h5>Turno:</h5>
                        <select name="" id="" onChange={(e) => setTurnoHorario(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="Manh??">Manh??</option>
                            <option value="Tarde">Tarde</option>
                            <option value="Noite">Noite</option>
                        </select>
                    </div>
                    <div>
                        <h5>Data de in??cio:</h5>
                        <IMaskInput
                            mask="00/00/0000"
                            value={dataInicio}
                            unmask={false}
                            onAccept={
                                (setDataInicio, mask) => console.log(dataInicio)
                            }
                        />
                    </div>
                    <div>
                        <h5>Data de fim:</h5>
                        <IMaskInput
                            mask="00/00/0000"
                        />
                    </div>
                </div>
                <div className={styles['btn-salvar']} onClick={() => cadastraHorario()}>
                    Cadastrar
                </div>
            </section>
        </>
    )
}

export default Home