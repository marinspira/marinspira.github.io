import React, { useContext, useEffect, useRef, useState } from 'react';
import * as C from './styles'
import { HashLink } from 'react-router-hash-link';
import { FaBars } from 'react-icons/fa';
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { HeaderVisibilityContext } from '../../contexts/headerVisibilityContext';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    const navbarRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { showHeader } = useContext(HeaderVisibilityContext);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);    

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true; 
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
                <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                    {isMobile && (
                        <div style={{ cursor: "pointer" }} onClick={() => setIsDark(prev => !prev)}>
                            {isDark ? <IoMdSunny size={20} color='white' /> : <IoMdMoon size={20} color='black' />}
                        </div>
                    )}
                    <C.MenuIcon onClick={toggleMenu}>
                        <FaBars color="var(--black)" />
                    </C.MenuIcon>
                </div>

                <C.Navbar ref={navbarRef} menuOpen={menuOpen}>
                    {!isMobile && (
                        <div style={{ cursor: "pointer" }} onClick={() => setIsDark(prev => !prev)}>
                            {isDark ? <IoMdSunny size={20} color='white' /> : <IoMdMoon size={20} color='black' />}
                        </div>
                    )}
                    <li onClick={() => setMenuOpen(false)}><a href='https://medium.com/@mariaferreira.developer'>Blog</a></li>
                    <li onClick={() => setMenuOpen(false)}><HashLink to="/#about">About</HashLink></li>
                    <li onClick={() => setMenuOpen(false)}><HashLink to="mailto:mariaferreira.developer@gmail.com">Contact</HashLink></li>
                    <li onClick={() => setMenuOpen(false)}><a href="https://drive.google.com/file/d/1dybROZTrO_tOiMAO-cE0s2HKIgc9qZqa/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a></li>
                    <li onClick={() => setMenuOpen(false)}><a href="https://www.github.com/marinspira" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </C.Navbar>
            </C.Header>
            {/* </div> */}
        </C.HeaderMain>
    );
}

export default Header;