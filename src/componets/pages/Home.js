import LinkButton from '../layout/LinkButton';
import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao sistema <span>CRUD</span></h1>
            <div className={styles.paragrafo}>
                <p >Cadastro de professores</p>
                <p>Crud feito pra trabalho</p>
                <p>3º periodo</p>
                <p>Professor James</p>
            </div>
            <div>
                <LinkButton to="/novoprofessor" text="Cadastrar professor" />
            </div>
        </section>
    )
}

export default Home;