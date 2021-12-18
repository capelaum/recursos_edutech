import styled from "styled-components";

interface ContainerProps {
  isBlue?: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: ${({ isBlue }) =>
    isBlue ? "var(--color-primary)" : "var(--color-secondary)"};

  color: #fff;
  padding: 1rem 2rem;

  font-size: 1.25rem;
  font-weight: 500;

  border-radius: 5px;

  transition: all 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
