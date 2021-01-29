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
          <title>GeoQuiz - My Alura Quiz</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:title" content="GeoQuiz - My Alura Quiz" key="title" />
          <link rel="shortcut icon" href="../src/assets/favicon.ico" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
  )
}
