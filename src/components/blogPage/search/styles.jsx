import styled from "styled-components";

export const Banner = styled.div`
    // background: linear-gradient(to right, #aa4eff, #f1b8d7);
    // background: linear-gradient(to right, #aa4eff, var(--dark));
    /* background-color: var(--dark); */
    height: 280px;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    flex-direction: column;
`

export const Text = styled.span`
    font-size: 200px;
    letter-spacing: 10px;
    color: var(--black);
    font-weight: 900;
`

export const InputSearch = styled.input`
    font-size: 16px;
    font-family: inherit;
    width: 100%;
    border: none;
    padding-left: 10px;

    &:focus-visible {
    outline: none;
  }
`

export const InputWrapper = styled.div`
    padding: 5px;
    font-family: inherit;
    border: 3px solid rgba(117, 117, 117, 0.02);
    background-color: #fff;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    border-radius: 3px;
`