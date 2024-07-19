import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 10px;
  max-width: 1500px;
    width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  gap: 30px;

  img {
    border-radius: 10px;
    width: auto;
    height: 550px;
    object-fit: contain;
  }

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }

  h2 {
    font-size: 28px !important;
    text-transform: uppercase;
  }

  @media (max-width: 992px) {
    max-width: 100%;
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;