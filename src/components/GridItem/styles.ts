import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;

  color: var(--color-primary);
  background-color: #fff;

  border-radius: 20px;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  .grid_item_image {
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  p {
    text-align: center;
    font-weight: 500;
    font-size: 1.1rem;
  }
`;
