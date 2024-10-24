/*Pagina de Listagem de Usuário */
import { useEffect, useState } from "react";
import api from "../../services/api";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";

function ListUsers() {
    const [users, setUsers] = useState([])

    // Buscar os usuarios na API
    useEffect(() => {
        async function getUsers() {
        const { data } = await api.get("/usuarios");
        setUsers(data)
        }
        getUsers();
    }, []);

    return (
        <div>
        <TopBackground></TopBackground>
        <h1>Listagem de Usuários</h1>

        {/*Estrutura p/ Colocar array na tela*/}
        {users.map(user => (
            <div key={user.id}> {/* Chave de indent. id */}
                <p>{user.name}</p>
                <p>{user.age}</p>
                <p>{user.email}</p>
            </div>
        ))}

        <Button>Voltar</Button>
        </div>
    );
}

export default ListUsers;
