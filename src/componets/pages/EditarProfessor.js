import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import LinkButton from '../layout/LinkButton'
import ProfessorForm from '../form/ProfessorForm'
import styles from "./EditarProfessor.module.css"

function EditarProfessor() {
  const { id } = useParams()
  const [professor, setProfessor] = useState({})
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
    fetch(`http://localhost:5000/professores/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(professor),
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert('Professor alterado')
        setProfessor(data)
        history.push('/professores')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.container}>
      <h1>Editar registro</h1>
      {Object.keys(professor).length > 0 ? (
        <ProfessorForm
          handleSubmit={editar}
          btnText="Salvar"
          professorData={professor}
        />
      ) : (
        <p>Carregando...</p>
      )}
      <div className={styles.btn}>
        <LinkButton to="/professores" text="Voltar" />
      </div>
    </div>
  )
}

export default EditarProfessor;
