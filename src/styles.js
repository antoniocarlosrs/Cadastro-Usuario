// Importar o styled-components
import styled from "styled-components"

export const Container = styled.div`
    background-color: #181f36;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 1.3rem;
    height: 100vh;
`
export const TopBackground = styled.div`
    background: linear-gradient(to right, #fe7e5d, #7f3841);
    height: 30vh;
    width: 90vw;
    max-width:100%;
    /* max-width: 800px; */
    border-radius: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center; 

        img { 
            max-width: 100%;
            max-height: 100%;
        }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.3rem;
    max-width: 3125%;
`
export const ContainerInputs = styled.div`

`
export const Input = styled.input`

`
export const InputLabel = styled.label`

`
export const Button = styled.button`

`
export const Title = styled.h2`

`