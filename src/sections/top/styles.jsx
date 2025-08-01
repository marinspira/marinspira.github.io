import styled from 'styled-components';

export const Section = styled.section`
  background-color: var(--white);
  min-height: 94vh;
  display: flex;
  align-items: center;
`

export const Container = styled.div`
  max-width: 1500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 15px;
  flex-direction: column;
  text-align: center;

  @media (max-width: 992px) {
    max-width: 100%;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    padding: 130px 0px 80px 0px;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  img {
    border: 3px solid #2d2e32;
    border-radius: 50%;
    height: 350px;
    width: 350px;
    object-fit: cover
  }
`;

export const Content = styled.div`
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h1 {
    font-size: 50px;
    font-weight: 600;
    color: var(--dark);
    text-align: center;
  }

  span {
    color: var(--dark);
  }

  div {
    display: flex;
    font-size: 30px;
    gap: 20px;
    align-items: center;
    margin-top: 10px;
  }

  div svg {
    color: var(--dark)
  }

  div img {
    height: 30px;
  }

  @media (max-width: 992px) {

    max-width: 100%;
    margin-right: 0;
    margin-top: 40px;
    text-align: center;

    h1 {
      font-size: 28px;
    }

    div {
      justify-content: center;
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
`;