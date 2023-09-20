import styled from 'styled-components';

export const HeaderMain = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.09);
    padding: 25px 40px 25px 50px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    height: auto;
`

export const Title = styled.a`
    font-family: inherit;
    font-size: 30px;
    color: var(--dark);
    font-weight: 600;
`

export const Navbar = styled.ul`
    display: flex;
    gap: 25px;

    li a {
        color: var(--dark);
        font-weight: 600;
    }
`