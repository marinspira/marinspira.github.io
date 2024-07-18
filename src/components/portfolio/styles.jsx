import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 0px;
  display: flex;
  flex-direction: column;
    width: 90vw;
    max-width: 1500px;
    align-items: flex-start;
  margin: 0 auto;
  gap: 40px;
  justify-content: flex-start;
  text-align: center;

  h2 {
    font-size: 50px;
    font-weight: 600;
  }

  img {
    height: 25px;
    margin-right: 5px;
    margin-bottom: 50px;
  }

  @media (max-width: 992px) {
    max-width: 100%;
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;

export const PostCard = styled.div`
    border-radius: 10px;
    display: flex;
    gap: 40px;
    background-color: var(--grey);
    padding: 30px;
    margin-bottom: 50px;
    height: 70vh;
    border-radius: 10px;
    flex-direction: ${props => props.switchCol ? 'row-reverse' : 'row'};

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    h3 {
        font-size: 28px
    }

    span {
        text-align: justify;
    }
`

export const Content = styled.div`
    width: 45%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

    div {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    img {
        height: 40px;
    /* box-shadow: 0px 0px 7px 7px rgba(0, 0, 0, 0.049); */
    }
`

export const ContentImage = styled.div`
    height: 100%; /* Define a altura fixa */
    overflow: hidden;
    width: 55%;
    position: relative;
    

    img {
        height: auto;
        width: 100%;
        transition: transform 0.5s ease;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        transition: transform 15s ease-in-out;
    }

    &:hover img {
        transform: translateY(-92%); /* Ajuste o valor para a rolagem desejada */
    }
`