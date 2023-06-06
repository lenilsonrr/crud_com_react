import styles from './Professores.module.css'
import LinkButton from '../layout/LinkButton';
import ProfessoresTable from '../form/ProfessoresTable';

import { useEffect, useState } from 'react'
function Professores() {

    const [professores, setProfessores] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/professores", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProfessores(data)
            })
            .catch((err) => console.log(err))
    }, [])

    function deletar(id) {
        fetch(`http://localhost:5000/professores/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then(() => {
                setProfessores(professores.filter((p) => p.id !== id))
            }).catch((err) => console.log(err))
    }

    return (
        <div className={styles.professores_container}>
            <div className={styles.title_container}>
                <h1>Lista de Professores</h1>
                <div className={styles.link}>
                    <LinkButton to="/novoprofessor" text="Novo professor" />
                </div>
            </div>
            <div className={styles.tabela}>
                <ProfessoresTable list={professores} handleDeletar={deletar} />
            </div>
        </div>
    )
}

export default Professores;