import { Title, Container, Input, ContainerInputs, Button, InputLabel, TopBackground, Form } from "./styles"

import UsersImage from './assets/users.png'

function Home() {
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
              <Input type="text" placeholder="Nome do Usuário"/>
            </div>

            <div>
            <InputLabel>
                Idade<span> *</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do Usuário"/>
            </div>
        </ContainerInputs>

            <div style={{width: '100%'}}> {/* Style CSS inline, para nao criar compomente */}
            <InputLabel>
                E-mail<span> *</span>
              </InputLabel>
              <Input type="email" placeholder="E-mail do usuário"/>
            </div>

        <Button>Cadastrar Usuário</Button>

      </Form>

    </Container>
  )
}
export default Home

