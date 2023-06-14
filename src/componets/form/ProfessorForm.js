import { useState } from 'react'
import Input from '../componentsForm/Input'
import SubmitButton from '../componentsForm/SubmitButton'
import styles from './ProfessorForm.module.css'

function ProfessorForm({ handleSubmit, btnText, professorData }) {
  const [professor, setProfessor] = useState(professorData || {})

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(professor)
  }

  function handleChange(e) {
    setProfessor({ ...professor, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submit} className={styles.form}>
        <Input
          type="text"
          text="Nome do(a) professor(a)"
          placeholder="Digite o nome"
          name="name"
          handleOnChange={handleChange}
          value={professor.name || ''}
        />
        <Input
          type="number"
          text="Número de Registro"
          placeholder="Digite o número"
          name="rg"
          handleOnChange={handleChange}
          value={professor.rg || ''}
        />
        <SubmitButton text={btnText} />
      </form>
    </div>
  )
}

export default ProfessorForm;
