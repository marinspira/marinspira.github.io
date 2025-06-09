import React, { useEffect, useState } from 'react';
import * as C from './styles'
import { HashLink } from 'react-router-hash-link';

function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;

                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setShowHeader(false);
                } else {
                    setShowHeader(true);
                }

                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <C.HeaderMain visible={showHeader}>
            <C.Header>
                <C.Title href='/'>maria</C.Title>
                <C.Navbar>
                    <li><HashLink to="/#about">About</HashLink></li>
                    <li><a href='/#/blog'>Blog</a></li>
                    <li><HashLink to="/#contact">Contact</HashLink></li>
                    <li><HashLink to="/#projects">Projects</HashLink></li>
                </C.Navbar>
            </C.Header>
        </C.HeaderMain>
    );
}

export default Header;