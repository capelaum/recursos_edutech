import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 768px) {
      font-size: 87.5%; // 14px
    }
    scroll-behavior: smooth;
  }

  :root {
    --color-primary: #2C2252;
    --color-secondary: #F44C9D;
    --color-background: #f5f5f5;
    --color-gray-200: #c1c8cc;
    --color-gray-400: #c1bccc;
    --color-gray-500: #a6adad;
    --color-gray-700: #999;
  }

  body,
  input,
  textarea,
  button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .ReactModal__Overlay {
      opacity: 0;
      transition: opacity 250ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
      opacity: 1;
  }

  .ReactModal__Overlay--before-close{
      opacity: 0;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    padding: 2.5rem;
    margin: 1.25rem;
    position: relative;
    border-radius: 20px;

    max-width: 576px;
    background: var(--color-primary);
    color: var(--color-secondary);

    @media (max-width: 480px) {
      padding: 3rem 1rem;
      margin: 1rem;
    }
  }

  .react-modal-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    border: 0;
    background: transparent;

    color: #fff;
    transition: all 0.3s;

    &:hover {
      color: var(--color-secondary);
    }
  }
`;
