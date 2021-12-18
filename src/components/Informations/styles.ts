import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;

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

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.25rem;

  padding: 0 1.25rem;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;

  color: var(--color-primary);

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
