import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  margin-top: 3rem;
  padding: 1rem 1.25rem 0.5rem 1.25rem;

  display: flex;
  justify-content: center;

  background-color: var(--color-primary);
`;

export const Content = styled.footer`
  width: 100%;
  max-width: 1200px;

  display: flex;
  justify-content: space-between;

  color: var(--color-secondary);

  .content_left {
    & > div {
      margin-top: 1rem;
      & > span {
        color: #fff;
      }
    }
  }

  .content_center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    & > a {
      color: #fff;
      text-decoration: none;
      font-size: 1.25rem;

      transition: all 0.3s;

      &:hover {
        color: var(--color-secondary);
      }
    }
  }

  .content_right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;

    span {
      font-size: 0.9rem;
      a {
        padding: 0 0.2rem;
        color: #fff;
        text-decoration: none;

        transition: all 0.3s;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
