{/*Importar o Hooks */}
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"

{/*Importar os componentes */}
import {
  Container,
  Input,
  ContainerInputs,
  InputLabel,
  Form } from "./styles"

import Button from '../../components/Button'
import TopBackground from "../../components/TopBackground"
import PageTitle from "../../components/PageTitle"

function Home() {
  {/*Variável dos inputs */}

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  const navigate = useNavigate()

  {/*Chamada da API cadastro de Usuário */}
  async function registerNewUser(){
    await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt (inputAge.current.value),
      name: inputName.current.value
    })

    // Limpar os campos após o cadastro
    inputName.current.value = '';
    inputAge.current.value = '';
    inputEmail.current.value = '';

  }

  return (
    <Container>

      <TopBackground></TopBackground>

      <Form>

      <PageTitle></PageTitle>

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

        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </Button>
      </Form>

      <Button type="button" onClick={() => navigate ('/lista-de-usuários')}>
        Ver Lista de Usuários 
      </Button>

    </Container>
  )
}
export default Home

