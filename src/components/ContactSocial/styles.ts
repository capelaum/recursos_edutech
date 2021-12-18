import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  a {
    color: var(--color-secondary);

    & + a {
      padding-left: 0.8rem;
    }

    transition: all 0.3s;

    &:hover {
      color: #fff;
  }
`;
