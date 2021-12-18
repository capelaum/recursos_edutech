import styled from "styled-components";

export const Container = styled.header`
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

  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  #hero_image {
    flex: 50%;

    span {
      overflow: visible !important;

      & > img {
        top: 17% !important;
        inset: none !important;
      }
    }

    position: relative;
  }
`;

export const HeroContent = styled.div`
  flex: 50%;
  padding-right: 1rem;
  padding-bottom: 1.5rem;

  h1 {
    display: flex;
    align-items: center;

    font-size: 2rem;
    font-weight: 700;

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
    padding-bottom: 1.5rem;
  }
`;
