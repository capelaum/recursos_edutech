import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  label {
    flex: 80%;
  }

  .cep_button {
    display: flex;
    flex: 20%;
    background-color: var(--color-secondary);
    color: #fff;

    padding: 0.5rem 2rem;
    margin: 0 0 0 0.5rem;

    font-size: 1.25rem;
    font-weight: 400;

    border-radius: 5px;

    transition: all 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const CepData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1rem 0.5rem;

  border: 1px solid var(--color-secondary);
  border-radius: 5px;

  strong {
    color: #fff;
    font-weight: 500;
    padding: 0.1rem 0;

    span {
      color: var(--color-secondary);
    }
  }
`;
