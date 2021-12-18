import styled from "styled-components";

export const Container = styled.h1`
  color: var(--color-primary);

  font-size: 1.75rem;
  font-weight: 600;

  margin-bottom: 2.5rem;

  &:after {
    content: " ";
    display: block;
    border-bottom 5px solid var(--color-secondary);
    border-radius: 2px;
  }
`;
