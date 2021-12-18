import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;

  color: var(--color-primary);
  background-color: #fff;

  border-radius: 20px;
  border: 2px solid var(--color-primary);

  transition: all 0.3s;

  .info_image {
    padding-bottom: 1rem;
  }

  p {
    text-align: center;
    font-weight: 500;
    font-size: 1.1rem;
  }

  &:hover {
    background: var(--color-primary);
    color: #fff;
  }
`;
