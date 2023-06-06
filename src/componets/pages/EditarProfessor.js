import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import LinkButton from '../layout/LinkButton'
import ProfessorForm from '../form/ProfessorForm'
import styles from "./EditarProfessor.module.css"



function EditarProfessor() {

    const { id } = useParams()

    const [professor, setProfessor] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:5000/professores/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProfessor(data)
            })
            .catch((err) => console.log(err))
    }, [id])

    
    function editar(professor) {
        const { name } = professor;
        // Verificar se o nome já existe
        fetch(`http://localhost:5000/professores?name=${name}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    alert('O nome já existe. Escolha um nome diferente.');
                } else {

                    fetch(`http://localhost:5000/professores/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(professor),
                    })
                        .then((resp) => { resp.json() })
                        .then((data) => {
                            alert('professor alterado')
                            setProfessor(data)
                            history.push('/professores')
                        })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className={styles.container}>

            <h1>Nome e Registro atual</h1>
            <h3>Nome: {professor.name}</h3>
            <h3>Nº Registro: {professor.rg}</h3>
            <ProfessorForm
                handleSubmit={editar}
                btnText="Salvar"
                pessoaData={professor} />
            <div className={styles.btn}>
                <LinkButton to="/professores" text="Voltar" />
            </div>
        </div>
    )
}

export default EditarProfessor;