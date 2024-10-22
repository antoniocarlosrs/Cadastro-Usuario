import styled from "styled-components";

export const Button = styled.button`
    border: ${(props) =>
        props.theme === "primary" ? "none" : "1px solid #ffff "};
    border-radius: 1.8rem;
    background: ${(props) =>
        props.theme === "primary"
        ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
        : "transparent"};
    font-size: 1rem;
    color: #fff;
    padding: 1rem 2rem;
    width: fit-content;
    cursor: pointer;

    &:hover {
        ${ (props) => props.theme === "primary" ? "opacity: 0.8" : "background:linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"};
    }

    &:active {
        opacity: 0.5;
    }
`;
