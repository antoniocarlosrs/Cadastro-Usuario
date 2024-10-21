import styled from "styled-components";

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