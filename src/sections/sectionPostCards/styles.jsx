import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--grey);
  display: flex;
`

export const Container = styled.div`
  padding: 80px 0px;
  max-width: 1500px;
  width: 90vw;
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
    flex-direction: column-reverse;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;
`