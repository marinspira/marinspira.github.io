import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1800px;
    padding: 0 20px;
`

export const HeaderMain = styled.header`
    background-color: var(--white);
    /* box-shadow: 0 0 10px rgba(0, 0, 0, .09); */
    padding: 20px 0px;
    position: fixed;
    display: flex;
    top: 0;
    width: 100%;
    z-index: 999;
    height: auto;
    justify-content: center;
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    margin: 0 auto;
`

export const Title = styled.a`
    font-family: inherit;
    font-size: 20px;
    color: var(--dark);
    font-weight: 600;

    &:focus-visible {
        border: none;
        outline: none;
    }
`

export const Navbar = styled.ul`
    display: flex;
    gap: 25px;

    li a {
        font-weight: 600;
        cursor: pointer;
        padding: 20px;
        color: var(--dark);
        width: 100%;
    }

    li a:hover {
    @media (max-width: 600px) {
        color: var(--white);
        background-color: var(--black)
    }}

    li {
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }}

    @media (max-width: 600px) {
        position: absolute;
        top: 70px;
        gap: 0px;
        left: 0;
        width: 100%;
        flex-direction: column;
        background: white;
        display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    }
`

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;

  @media (max-width: 600px) {
    display: block;
  }
`;