import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--white);
  min-height: 90vh;
  display: flex;
  align-items: center;
`;

export const MockupDesk = styled.img`
    width: 100%;
    object-fit: contain;
    /* object-position: top center; */
`

export const MockupWrapper = styled.div`
  position: relative;
  width: 100%;
  
  @media screen and (max-width: 992px) {
          margin-top: 40px;
    }
`;

export const MobileWrapper = styled.div`
    display: flex;
`

export const ImageMobile = styled.img`
    height: 320px;
    object-fit: contain;
    object-position: end center;

    @media screen and (max-width: 992px) {
        height: 300px;
    }
`

export const MockupScreenshot = styled.img`
  position: absolute;
  top: 10.5%;     
  left: 10%;     
  width: 80%;  
  height: 79%; 
  object-fit: cover;
  object-position: top center;
  border-radius: 8px;
`

export const MockupScreenshot2 = styled.img`   
  width: 100%;  
  object-fit: cover;
  object-position: top center;
  border-radius: 8px;
`

export const List = styled.ul`
    // position: absolute;
    // bottom: 50px

    span {
        font-size: 16px;
        /* color: var(--white) */
        color: #fff
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;

    p {
        font-size: 30px;
        font-weight: 600;
        margin: 0 0 20px 0;
        /* color: var(--white) */
        color: ${({ $textColor }) => $textColor || "#fff"};
    }

    li span {
      color: ${({ $textColor }) => $textColor || "#fff"};
    }
`

export const Container = styled.div`
    padding: 0px 0px 80px 0px;
    display: flex;
    flex-direction: row;
    /* width: 90vw; */
    /* max-width: 1500px; */
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;

  h2 {
    font-size: 50px;
    font-weight: 600;
    text-transform: uppercase;
  }

  @media (max-width: 992px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const PostCard = styled.div`
    width: 48%;
    min-height: 600px;
    border-radius: 0px;
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
    gap: 10px;
    // background-color: var(--grey);
    flex-direction: ${({ $invert }) => $invert ? "column-reverse" : "column"};
    background-color: ${({ $bgColor }) => $bgColor || 'var(--grey)'};
    padding: 50px;
    margin-bottom: 50px;
    box-shadow: 1px 3px 7px 5px rgba(0, 0, 0, 0.049);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    align-items: center;
    height: auto;

    h3 {
        font-size: 28px
    }

    span {
        text-align: justify;
    }

    &.fade {
    animation: fadeInUp 0.4s ease-in-out;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

    @media screen and (max-width: 992px) {
        width: 100%;
        min-height: 500px;
    }
`

export const Button = styled.a`
  display: inline-block;
  padding: 5px 20px;
  margin: 20px 0;
  cursor: pointer;
  border-radius: 3px;
  background-color: ${({ $textColor }) => $textColor || 'var(--white)'};

  &:hover {
    border: 2px solid ${({ $textColor }) => $textColor || 'var(--white)'};;
    background-color: transparent;
    transition: 0.5s;
    padding: 3px 18px;


    span {
    color: ${({ $textColor }) => $textColor || 'var(--grey)'};
  }
  }

  span {
    font-weight: 600;
    font-size: 16px;
    color: ${({ $bgColor }) => $bgColor || 'var(--grey)'};
  }
`;


export const Content = styled.div`
    width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    gap: 15px;

    .date {
      margin-bottom: -18px;
      font-size: 16px;
    }

    img {
        height: 40px;
    }

    @media screen and (max-width: 992px) {
    width: 100%;
    }
`
