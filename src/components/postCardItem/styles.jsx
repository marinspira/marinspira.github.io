import { Link } from "react-router-dom";
import styled from "styled-components";

export const Post = styled(Link)`
  background-color: var(--black);
  padding: 20px 20px 20px 20px;
  min-width: 300px;
  max-width: 700px;
  overflow: hidden;
  /* box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.049); */
  border: solid 1px var(--black);
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  color: var(--dark);
  flex: 1;

  @media (max-width: 992px) {
    width: 100%;
  }

  label {
    background: var(--dark);
    color: #fff;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 5px 10px;
    border-radius: 3px;
    bottom: 20px;
  }

  span {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 20px;
  }
`

export const Title = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: var(--white);
`

export const Date = styled.p`
    margin: 20px 0 0 0;
    color: var(--white);
`

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
    height: 200px;
`