import styled from "styled-components";

export const Banner = styled.header`
  width: 100%;

  background-color: var(--color-primary);
  color: var(--color-secondary);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contact = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 1rem 1.25rem;

  display: flex;
  justify-content: space-between;
  align-items: center;


  a {
    color: var(--color-secondary);

    transition: all 0.3s;

    &:hover {
      color: #fff;
  }
`;
