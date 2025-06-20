import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
  padding: 20px;
  
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

export const PostArchive = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  width: 100%;
  justify-items: stretch;

  @media screen and (min-width: 600px) and (max-width: 1092px) {
  grid-template-columns: 1fr 1fr;
  } 

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

`

