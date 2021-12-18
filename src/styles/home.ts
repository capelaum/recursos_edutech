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
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactSocial = styled.div`
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

export const Hero = styled.section`
  width: 100%;
  max-width: 1200px;

  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .hero_content {
    flex: 50%;

    padding-right: 1rem;

    h1 {
      display: flex;
      align-items: center;

      font-size: 2rem;

      padding-bottom: 2rem;

      .logo_image {
        padding-right: 0.5rem;
        display: flex;
        align-items: center;
      }
    }

    h2 {
      color: #fff;
      font-size: 1.75rem;
      font-weight: 400;
    }
  }

  .hero_image {
    flex: 50%;

    border: 1px solid red;
  }
`;
