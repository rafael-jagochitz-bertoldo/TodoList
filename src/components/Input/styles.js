import styled, { css } from "styled-components";

export const Container = styled.section`
  text-align: left;
  div {
    span {
      color: var(--red);
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--gray);
  color: var(--gray);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
      svg {
        color: var(--red);
      }
    `}
  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    margin-left: 10px;
    color: var(--black);
    &::placeholder {
      color: var(--gray);
    }
  }
`;
