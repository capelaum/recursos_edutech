import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            cross-origin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap"
            rel="stylesheet"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <meta
            name="description"
            content="Recursos EduTech - Facilitando o acesso a recursos educacionais para quem precisa."
          />
          <meta property="og:title" content="Recursos EduTech" />
          <meta property="og:site_name" content="Recursos EduTech"></meta>
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Recursos EduTech - Facilitando o acesso a recursos educacionais para quem precisa."
          />
          <meta
            property="og:url"
            content="https://recursos-edutech.vercel.app"
          />

          <meta property="og:image" itemProp="image" content="logo.png" />
          <meta property="og:image:type" content="image/png"></meta>
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
