import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3.75rem;

  padding: 0 2rem;
`;

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.25rem;
`;
