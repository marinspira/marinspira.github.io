import styled from 'styled-components';

export const HeaderMain = styled.header`
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .09);
    padding: 30px 0;
    position: fixed;
    display: flex;
    top: 0;
    width: 100%;
    z-index: 999;
    height: auto;
    justify-content: center;
`

export const Header = styled.div`
    max-width: 1500px;
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
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