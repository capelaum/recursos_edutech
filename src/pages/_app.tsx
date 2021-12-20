import type { AppProps } from "next/app";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
