import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #fff;

    font-size: 1.75rem;
    font-weight: 500;

    margin-bottom: 2rem;

    &:after {
      content: " ";
      display: block;
      border-bottom 3px solid var(--color-secondary);
      border-radius: 2px;
    }
  }

  label {
    width: 100%;

    & + label {
      margin-top: 1rem;
    }
  }

  input[type="text"], [type="email"], textarea {
    width: 100%;

    padding: 0.5rem;
    font-size: 1rem;

    color: #fff;
    background-color: var(--color-primary);
    border: 2px solid var(--color-secondary);

    border-radius: 5px;

    &:focus {
      outline: none;
      border: 2px solid white;
    }

    &::placeholder {
      color: var(--color-background);
    }
  }

  textarea {
    margin-top: 1rem;
    resize: vertical;
  }

  button[type="submit"] {
    color: #fff;
    background-color: var(--color-secondary);
  }
`;
