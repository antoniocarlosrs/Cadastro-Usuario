/*Pagina de Listagem de Usuário */
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import Trash from '../../assets/trash.svg'
import PageTitle from "../../components/PageTitle";

//Importar os copomentes do styled.
import { 
    AvatarUser,
    CardUsers,
    Container,
    ContainerUsers, 
    TrashIcon } from "./styles";

function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    // Buscar os usuarios na API
    useEffect(() => {
        async function getUsers() {
        const { data } = await api.get("/usuarios");
        setUsers(data)
        }
        getUsers();
    }, []);

    return (
    <Container>
        <TopBackground />
        <PageTitle />

        <ContainerUsers>
            {/*Estrutura p/ Colocar array na tela*/}
            {users.map(user => (
                <CardUsers  key={user.id}> {/* Chave de indent. id */}
                    <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/> {/**Endereço a API AVATAR */}
                    <div> 
                        <h3>{user.name}</h3>
                        <p>{user.age}</p>
                        <p>{user.email}</p>
                    </div>
                <TrashIcon src={Trash} alt="Icone-Lixo"/>    
                </CardUsers>
            ))}
        </ContainerUsers>

        <Button type="button" onClick={() => navigate('/')}> ↩ Voltar</Button>
    </Container>
    );
}

export default ListUsers;
