import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 10px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 40px;
  justify-content: center;
  text-align: center;

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
    padding: 30px;
    margin: 0 auto;
    width: 1000px;
    height: 400px;
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.049);

    div {
        display: flex;
        flex-direction: column;
    }

    h3 {
        font-size: 28px
    }
`

export const Content = styled.div`
    width: 45%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    div {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    a {
        background-color: var(--dark);
        color: #fff;
        padding: 5px 15px;
        border-radius: 5px;
        margin-top: 10px;
    }

    a svg {
        margin-left: 10px;
    }

    img {
        height: 40px;
    }
`

export const ContentImage = styled.div`
    height: auto;
    overflow: hidden;
    width: 55%;

    img {
        height: auto;
        width: 100%;
        transform: translateY(0%);
        transition: transform 10s ease-in-out 0s;
    }
`