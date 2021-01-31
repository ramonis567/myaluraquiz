import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const theme = db.theme;

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Lato', Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.colors.contrastText};
}
html, body {
  min-height: 100vh;
}
#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
`;

export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        <Head>
          {/*<!-- Primary Meta Tags -->*/}
          <title>Geo Quiz - Teste os seus conhecimentos em geografia</title>
          <meta name="title" content="Geo Quiz - Teste os seus conhecimentos em geografia" />
          <meta name="description" content="Testes os seus conhecimentos sobre o mundo e geografia em geral. Criado durante a Imersão de React/Next da Alura." />

          {/*<!-- Open Graph / Facebook -->*/}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta property="og:title" content="Geo Quiz - Teste os seus conhecimentos em geografia" />
          <meta property="og:description" content="Testes os seus conhecimentos sobre o mundo e geografia em geral. Criado durante a Imersão de React/Next da Alura." />
          <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

          {/*<!-- Twitter -->*/}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:title" content="Geo Quiz - Teste os seus conhecimentos em geografia" />
          <meta property="twitter:description" content="Testes os seus conhecimentos sobre o mundo e geografia em geral. Criado durante a Imersão de React/Next da Alura." />
          <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
          <link rel="shortcut icon" href="../src/assets/favicon.ico" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
  )
}
