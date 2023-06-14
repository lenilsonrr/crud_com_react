import { useHistory } from 'react-router-dom';
import ProfessorForm from '../form/ProfessorForm';
import styles from './NovoProfessor.module.css';

function NovoProfessor() {
  const history = useHistory();

  function creatPost(professor) {
    const { name, rg } = professor;

    // Verificar se o campo "name" ou "rg" está vazio
    if (!name || !rg) {
      alert('O campo não pode estar vazio.');
      return;
    }

    // Verificar se o nome já existe
    fetch(`http://localhost:5000/professores?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          alert('O nome já existe. Escolha um nome diferente.');
        } else {
          // Verificar se o RG já existe
          fetch(`http://localhost:5000/professores?rg=${rg}`)
            .then((response) => response.json())
            .then((data) => {
              if (data.length > 0) {
                alert('O RG já existe. Escolha um RG diferente.');
              } else {
                // O nome e RG não existem, enviar requisição POST
                fetch('http://localhost:5000/professores', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(professor),
                })
                  .then((resp) => resp.json())
                  .then((data) => {
                    history.push('/professores');
                  })
                  .catch((err) => console.log(err));
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.novoprofessor_container}>
      <h1>Criar Professor</h1>
      <ProfessorForm handleSubmit={creatPost} btnText="Cadastrar" />
    </div>
  );
}

export default NovoProfessor;
