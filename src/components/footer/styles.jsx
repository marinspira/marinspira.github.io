import styled from "styled-components";

export const Footer = styled.footer`
    background-color: var(--grey);
    padding: 80px 0 50px 0;
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
        color: var(--text);
        margin: 0;
    }

    span {
        font-size: 14px;
    }
`