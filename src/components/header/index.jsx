import React, { useContext, useEffect, useState } from 'react';
import * as C from './styles'
import { HashLink } from 'react-router-hash-link';
import { FaBars } from 'react-icons/fa';
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { HeaderVisibilityContext } from '../../contexts/headerVisibilityContext';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { showHeader } = useContext(HeaderVisibilityContext);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <C.HeaderMain visible={showHeader}>
            {/* <div className='container'> */}
            <C.Header>
                <C.Title href='/'>maria</C.Title>
                <C.MenuIcon onClick={toggleMenu}>
                    <FaBars />
                </C.MenuIcon>
                <C.Navbar menuOpen={menuOpen}>
                    <div style={{ cursor: "pointer" }} onClick={() => setIsDark(prev => !prev)}>
                        {isDark ? <IoMdSunny color='white' /> : <IoMdMoon color='black' />}
                    </div>

                    <li><HashLink to="/#about">About</HashLink></li>
                    <li><a href='/#/blog'>Blog</a></li>
                    <li><HashLink to="/#contact">Contact</HashLink></li>
                    <li><HashLink to="/#projects">Projects</HashLink></li>
                </C.Navbar>
            </C.Header>
            {/* </div> */}
        </C.HeaderMain>
    );
}

export default Header;