import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 0px;
  display: flex;
  flex-direction: column;
  /* width: 90vw;
  max-width: 1500px; */
  align-items: flex-start;
  margin: 0 auto;
  gap: 40px;
  justify-content: flex-start;

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

export const Description = styled.span`
  
`

export const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Tab = styled.button`
  border: 2px solid;
  border-color: #000;
  color: #000;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background-color: transparent;

  &.active {
    background-color: #000;
    color: #fff;
  }
`;

export const TabButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: #eee;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &.active {
    background: #0070f3;
    color: white;
  }
`;

export const PaginationDots = styled.div`
  margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
    gap: 0.5rem;
    width: 100%;
`;

export const Dot = styled.div`
  flex: 1;
  height: 3px;
  margin: 0 4px;
  background-color: #bbb;
  border-radius: 0px;
  cursor: pointer;

  &.active {
    background-color: #000;
  }
`;

export const List = styled.ul`
  margin-bottom: 10px;
`

export const Item = styled.li`
  margin-bottom: 10px;
`

export const PostCard = styled.div`
    width: 100%;
    border-radius: 0px;
    display: flex;
    gap: 40px;
    background-color: var(--grey);
    padding: 20px;
    margin-bottom: 50px;
    box-shadow: 1px 3px 7px 5px rgba(0, 0, 0, 0.049);
    height: 500px;
    border-radius: 10px;
    flex-direction: ${props => props.switchCol ? 'row-reverse' : 'row'};

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
      flex-direction: column;
      padding: 40px 20px;
      height: auto;
    }
`

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

export const HoverInformation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);

  .mouse {
    width: 40px;
    height: auto;
    animation: rotate 2s infinite alternate;
    z-index: 5;
    color: white;
  }

  span {
    font-size: 16px;
    color: #fff;
    font-weight: 400;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(50deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const ContentImage = styled.div`
    height: 100%;
    overflow: hidden;
    width: 55%;
    position: relative;
    transition: 1s;
    display: flex;
    justify-content: center;
  
    .main-image {
    height: auto;
    width: 600px;
    position: absolute;
    top: 25px;
    bottom: 0;
    filter: brightness(0.3);
    transition: transform 0.5s;
    transform: translateY(0);
    }

    .gif {
    height: 100%;
    width: 100%;
    margin: 12px 0 0px 0;
    padding-bottom: 23px;
    object-fit: contain;
    }

    .mockup-mobile {
    position: absolute;
    width: 249px;
    top: 0;
    z-index: 3;
    }

    .mockup-desktop {
    width: 644px;
    z-index: 3;
    position: absolute;
    top: 0;
    height: 505px;
    }

    &:hover .main-image {
    transform: translateY(-92%);
    filter: none;
    cursor: pointer;
    transition: transform 15s linear, filter 0.5s ease;
  }

  &:hover ${HoverInformation} {
    display: none;
  }
  
  @media screen and (max-width: 992px) {
    width: 100%;
    min-height: 400px;

    .gif {
      height: 500px;
    }

    .main-image {
      width: 100%;
    }
  }
`