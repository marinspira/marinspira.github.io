import { Link } from "react-router-dom";
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

export const Post = styled(Link)`
  background-color: #fff;
  padding: 40px 20px 20px 20px;
  max-width: 310px;
  overflow: hidden;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.049);
  border-radius: 10px;
  position: relative;
  border-left: 1px solid var(--dark);
  cursor: pointer;

  label {
    background: #aa4eff;
    color: #fff;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 1px 15px;
    border-radius: 0 10px 10px 0;
    position: absolute;
    left: 0;
    top: 20px;
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