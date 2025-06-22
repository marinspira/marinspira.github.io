import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 20px;
  max-width: 100%;
  /* display: flex;
  flex-direction: row; */
  margin: 0 auto;
  gap: 30px;
  /* height: 100vh; */
  overflow-y: auto;

  @media screen and (max-width: 778px) {
    padding: 0px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  
  @media screen {
    padding: 10px;
  }
`;

export const MainContent = styled.div`
  /* flex: 3;
  max-width: 80%; */
  width: 80%;
  padding-top: 10px;
  padding-left: 10px;

  li {
    list-style-type: disc;
    margin-bottom: 20px;
  }

  li::marker {
    color: var(--black); 
    font-size: 1.2em;
  }

  ul {
    padding-left: 2.5rem;
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 992px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const Sidebar = styled.div`
  flex: 1;
  position: sticky;
  top: 30px;
  align-self: flex-start;
  max-height: 100vh;
  overflow-y: auto;
  min-width: 200px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};

  span {
    color: var(--black);
    font-size: 16px;
    font-weight: 600;
  }

  ul {
    margin-top: 20px;
  }

  ul li a {
    color: var(--text);
    font-size: 12px;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const PostTitle = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Poppins', sans-serif;
  font-size: 2.5em;

  @media screen and (max-width: 778px) {
    font-size: 2em;
  }
`;

export const PostContent = styled.div`
  line-height: 1.6;

  h2, h3 {
    margin-top: 1.5rem;
  }

  p {
    font-size: 16px;
  }
`;