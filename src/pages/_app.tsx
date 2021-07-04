import { CharacterProvider } from '../contexts/CharacterContext';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <CharacterProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </CharacterProvider>
  );
}

export default MyApp;
