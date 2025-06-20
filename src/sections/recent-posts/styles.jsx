import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--grey);
  display: flex;
`

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;

  a {
    color: var(--black);
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Container = styled.div`
  padding: 80px 0px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  flex-direction: column;
  
  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-around;
  }

  @media (max-width: 992px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const Title = styled.h2`
    font-size: 50px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--black);
`