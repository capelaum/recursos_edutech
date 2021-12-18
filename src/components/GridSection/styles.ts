import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 3.75rem 0;
`;

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.25rem;

  padding: 0 1.25rem;
`;
