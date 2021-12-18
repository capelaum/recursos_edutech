import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;

  margin: 3.75rem 0;

  h1 {
    color: var(--color-primary);

    font-size: 1.75rem;
    font-weight: 600;

    margin-bottom: 2rem;

    &:after {
      content: " ";
      display: block;
      border-bottom 5px solid var(--color-secondary);
      border-radius: 2px;
    }
  }
`;
