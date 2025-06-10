import styled from "styled-components";

export const Banner = styled.div`
    // background: linear-gradient(to right, #aa4eff, #f1b8d7);
    // background: linear-gradient(to right, #aa4eff, var(--dark));
    background-color: var(--dark);
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 auto;
    flex-direction: column;
`

export const Text = styled.span`
    font-size: 80px;
    margin-bottom: 70px;
    letter-spacing: 10px;
    color: white;
    font-weight: 900;
`

export const InputSearch = styled.input`
    font-size: 18px;
    font-family: inherit;
    width: 100%;
    border: none;
    padding-left: 10px;

    &:focus-visible {
    outline: none;
  }
`

export const InputWrapper = styled.div`
    padding: 10px 20px;
    font-size: 18px;
    margin-bottom: -25px;
    font-family: inherit;
    width: 450px;
    border: 3px solid rgba(117, 117, 117, 0.02);
    background-color: #fff;
    border-radius: 100px;
    display: flex;
    flex-direction: row;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.02);
`