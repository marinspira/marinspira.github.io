import styled from 'styled-components';

export const Button = styled.a`
  border: 2px solid;
  border-color: #000;
  color: #000;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  .btn-inativo {
    border-color: #989898 !important;
    color: #989898 !important;
}
`;

export const Button2 = styled.a`
  background-color: #000;
  padding: 13px 20px;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;