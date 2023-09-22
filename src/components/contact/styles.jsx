import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--grey);
`

export const Container = styled.div`
  padding: 80px 10px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  gap: 30px;
  
  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 25px;
  }

  @media (max-width: 992px) {
    max-width: 100%;
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 600px;

    input, textarea {
        width: 100%;
        margin-bottom: 8px;
        border: 1px solid #c4c4c4;
        background-color: white;
        padding: 10px;
        font-size: 16px;
        border-radius: 8px;
        font-family: inherit;
    }

    button {
        background-color: var(--dark);
        border: none;
        padding: 8px;
        font-size: 16px;
        font-family: inherit;
        color: white;
        border-radius: 8px;

    }
`