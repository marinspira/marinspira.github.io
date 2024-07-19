import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--grey);
`

export const Container = styled.div`
  padding: 100px 10px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  gap: 60px;
  
  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 25px;
  }

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 550px;

    input, textarea {
        width: 100%;
        margin-bottom: 8px;
        border: 1px solid #eaeaea;
        background-color: white;
        padding: 10px;
        font-size: 16px;
        border-radius: 3px;
        font-family: inherit;
    }

    button {
        background-color: var(--dark);
        border: none;
        padding: 8px;
        font-size: 16px;
        font-family: inherit;
        color: white;
        border-radius: 3px;
        cursor: pointer;
    }

    @media (max-width: 992px) {
    max-width: 100%;
  }
`