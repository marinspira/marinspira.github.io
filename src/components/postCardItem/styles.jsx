import { Link } from "react-router-dom";
import styled from "styled-components";

export const Post = styled(Link)`
  background-color: #fff;
  padding: 20px 20px 40px 20px;
  max-width: 400px;
  overflow: hidden;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.049);
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  color: var(--dark);

  label {
    background: #aa4eff;
    color: #fff;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 1px 15px;
    border-radius: 3px;
    position: absolute;
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
    margin: 20px 0;
`

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    max-height: 200px;
    border-radius: 10px;

`