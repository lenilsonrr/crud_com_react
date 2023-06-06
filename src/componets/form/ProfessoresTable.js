import styles from './ProfessoresTable.module.css';
import { Button, Table } from "react-bootstrap";

function ProfessoresTable({ list, handleDeletar }) {

    return (
        <div className={styles.respons}>
            <div className="table-responsive">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Nº Registro</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.length > 0 &&
                            list.map((p) => (
                                <tr key={p.id}>
                                    <td className={styles.id}>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td className={styles.rg}>{p.rg}</td>
                                    <td>
                                        <div className={styles.btn}>
                                            <Button href={`/editarprofessor/${p.id}`}>Editar</Button>
                                            <Button variant='danger' onClick={() => handleDeletar(p.id)}>Excluir</Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default ProfessoresTable;
