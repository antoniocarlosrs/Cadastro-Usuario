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
export const Button = styled.button`
    border: none;
    border-radius: 1.8rem;
    background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
    font-size: 1rem;
    color: #fff;
    padding: 1rem 2rem;
    width: fit-content;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`