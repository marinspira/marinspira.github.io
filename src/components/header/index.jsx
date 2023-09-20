import React from 'react';
import * as C from './styles'

function Header() {
    return (
        <C.HeaderMain>
            <C.Title href='/'>maria</C.Title>
            <C.Navbar>
                <li><a href='#about'>About</a></li>
                <li><a href='/blog'>Blog</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='#projects'>Projects</a></li>
            </C.Navbar>
        </C.HeaderMain>
    );
}

export default Header;