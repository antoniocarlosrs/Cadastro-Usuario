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
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.3rem;
    max-width: 3125%;
`
export const Title = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 500;
`
export const ContainerInputs = styled.div`
    display: flex;
    gap: 1.3rem
`
export const Input = styled.input`
    border-radius: .6rem;
    border: 1px solid #d2dae2;
    background-color: #fff;
    padding: .8rem  1.2rem;
    outline: none;
    width: 100%;
    margin-top: .3rem 
`
export const InputLabel = styled.label`
    color: #fff;
    font-size: .8rem;
    font-weight: 500;

        span {
            color: #ef4e45;
            font-weight: bold;
        }
`