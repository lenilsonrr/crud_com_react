import { useState } from 'react'
import Input from '../componentsForm/Imput'
import SubmitButton from '../componentsForm/SubmitButton'
import styles from './ProfessorForm.module.css'

function ProfessorForm({ handleSubmit, btnText, professorData }) {

  
    const [professor, setProfessores] = useState(professorData || {})

    
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(professor)
    }

    function handleChange(e) {
        setProfessores({ ...professor, [e.target.name]: e.target.value , [e.target.rg]: e.target.value })
    }

    return (
        <div className={styles}>
            <form onSubmit={submit} className={styles.form}>
                <Input
                    type="text"
                    text="Nome do(a) professor(a)"
                    placeholder="Digite o nome"
                    name="name"
                    handleOnChange={handleChange} 
                    value={professor.name ? professor.name : ''}/>
                    <Input
                    type="number"
                    text="Numero de Registro"
                    placeholder="Digite o numero"
                    name="rg"
                    handleOnChange={handleChange}
                    value={professor.rg ? professor.rg : ''}/>
                <SubmitButton text={btnText} />
            </form>
        </div>
    )
}

export default ProfessorForm