import styled from "styled-components";

export const Dock = styled.nav`
  position: fixed;
  left: 50%;
  bottom: 18px;
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid rgba(255, 255, 255, 0.38);
  border-radius: 22px;
  background: rgba(20, 20, 24, 0.42);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
  transform: translateX(-50%) translateY(${({ $visible }) => ($visible ? "0" : "26px")});
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition: transform 0.28s ease, opacity 0.28s ease;

  @media (max-width: 800px) {
    gap: 6px;
    padding: 8px 10px;
    bottom: 10px;
  }
`;

export const DockItem = styled.button`
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  color: var(--white);
  cursor: pointer;
  transition: transform 0.18s ease, background 0.18s ease, color 0.18s ease;
  flex: 0 0 auto;
  overflow: hidden;

  svg {
    font-size: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover {
    transform: translateY(-4px) scale(1.08);
    background: rgba(255, 255, 255, 0.16);
  }

  &:focus-visible {
    outline: 2px solid var(--white);
    outline-offset: 3px;
  }

  @media (max-width: 800px) {
    width: 42px;
    height: 42px;
    border-radius: 14px;

    svg {
      font-size: 18px;
    }
  }
`;

export const DockImage = styled.a`
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
  flex: 0 0 auto;
  overflow: hidden;
  transition: transform 0.18s ease, background 0.18s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover {
    transform: translateY(-4px) scale(1.08);
    background: rgba(255, 255, 255, 0.16);
  }

  &:focus-visible {
    outline: 2px solid var(--white);
    outline-offset: 3px;
  }

  @media (max-width: 800px) {
    width: 42px;
    height: 42px;
    border-radius: 14px;
  }
`;
