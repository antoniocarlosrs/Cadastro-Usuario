import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 1.3rem;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    margin: 1.8rem 0;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.25rem;
    max-width: 380px;

    h3 {
        color: #fff;
        font-size: 1.5rem;
        margin-bottom: .2rem;
        text-transform: capitalize;
    }

    p {
        color: #fff;
        font-size: 1rem;
        font-weight: 300;
    }
`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 1.875rem;


    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`

export const AvatarUser= styled.img`
    height: 80px;
`
