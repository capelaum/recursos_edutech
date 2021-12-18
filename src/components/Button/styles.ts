import styled from "styled-components";

export const Container = styled.button`
  background: var(--color-secondary);
  color: #fff;
  padding: 1rem 1.25rem;

  font-size: 1.25rem;
  font-weight: 500;

  border-radius: 5px;

  transition: all 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
