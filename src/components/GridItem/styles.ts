import styled from "styled-components";

interface ContainerProps {
  isPartner?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;

  color: var(--color-primary);
  background-color: #fff;

  border-radius: 20px;
  border: ${({ isPartner }) =>
    isPartner ? "none" : "2px solid var(--color-primary)"};

  transition: all 0.3s;

  .info_image {
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  p {
    text-align: center;
    font-weight: 500;
    font-size: 1.1rem;
  }

  &:hover {
    background: ${({ isPartner }) =>
      isPartner ? "none" : "var(--color-primary)"};

    color: ${({ isPartner }) => (isPartner ? "var(--color-primary)" : "#fff")};
  }
`;
