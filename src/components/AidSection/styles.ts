import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-top: 3.75rem;
  padding: 1.25rem 2rem;

  background-color: var(--color-secondary);
  color: #fff;
`;

export const Content = styled.div`
  width: 100%;

  max-width: 1200px;

  display: flex;
  align-items: center;

  .aid_image {
    flex: 50%;

    margin-left: 2.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .aid_image {
      margin-left: 0;
    }
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 50%;

  h1 {
    color: var(--color-primary);
    font-size: 2.5rem;
    padding-bottom: 2rem;
  }

  p {
    font-size: 1.25rem;
    padding-bottom: 2rem;
  }

  @media (max-width: 768px) {
    align-items: center;
    padding-bottom: 1.25rem;

    p {
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
