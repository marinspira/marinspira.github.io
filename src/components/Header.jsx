import React from 'react';
import styled from 'styled-components';

const HeaderMain = styled.header`
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

const Title = styled.a`
    font-family: inherit;
    font-size: 30px;
    color: var(--dark);
    font-weight: 600;
`

const Navbar = styled.ul`
    display: flex;
    gap: 25px;

    li a {
        color: var(--dark);
        font-weight: 600;
    }
`

function Header() {
    return (
        <HeaderMain>
            <Title href='/'>maria</Title>
            <Navbar>
                <li><a href='#about'>About</a></li>
                <li><a href='/blog'>Blog</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='#projects'>Projects</a></li>
            </Navbar>
        </HeaderMain>
    );
}

export default Header;