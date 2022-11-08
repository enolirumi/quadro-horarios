import styles from './Styles.module.scss'
import axios from 'axios'
import { useEffect, useState } from 'react';

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
            console.log(res)
            return res
        })
    }

    const cadastraDisciplina = async () => {
        const res = await API.post(`${api_url}/disciplina`, {
            name: nomeDisciplina,
        }).then((res) => {
            console.log(res)
            return res
        })

        console.log(res);
    }

    const cadastraTurma = async () => {
        const res = await API.post(`${api_url}/turma`, {
            name: nomeTurma,
        }).then((res) => {
            console.log(res)
            return res
        })
    }

    useEffect(() => {

    }, [])

    const [nomeProfessor, setNomeProfessor] = useState('')
    const [nomeTurma, setNomeTurma] = useState('')
    const [nomeDisciplina, setNomeDisciplina] = useState('')

    const [modal, setModal] = useState(false)

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
        </>
    )
}

export default Home