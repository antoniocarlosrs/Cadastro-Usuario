{/*Importar o Hooks */}
import { useRef } from "react"
import api from "../../services/api"

{/*Importar os componentes */}
import { Title, Container, Input, ContainerInputs, Button, InputLabel, TopBackground, Form } from "./styles"

import UsersImage from '../../assets/users.png'

function Home() {
  {/*Variável dos inputs */}

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  {/*Chamada da API cadastro de Usuário */}
  async function registerNewUser(){
    await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt (inputAge.current.value),
      name: inputName.current.value
    })
  }

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="Imagem-Usuário"/>
      </TopBackground>

      <Form>

        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
            </div>

            <div>
            <InputLabel>
                Idade<span> *</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
            </div>
        </ContainerInputs>

            <div style={{width: '100%'}}> {/* Style CSS inline, para nao criar compomente */}
            <InputLabel>
                E-mail<span> *</span>
              </InputLabel>
              <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
            </div>

        <Button type="button" onClick={registerNewUser}>Cadastrar Usuário</Button>

      </Form>

    </Container>
  )
}
export default Home

