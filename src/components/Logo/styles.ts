import styled from "styled-components";

export const Container = styled.h1`
  display: flex;
  align-items: center;

  font-size: 2rem;
  font-weight: 700;

  color: var(--color-secondary);

  .logo_image {
    padding-right: 0.5rem;
    display: flex;
    align-items: center;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
