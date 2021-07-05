import { AppProps } from 'next/app';
import { CharacterProvider } from '../contexts/CharacterContext';
import { FavoritesProvider } from '../contexts/FavoritesContext';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <FavoritesProvider>
      <CharacterProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </CharacterProvider>
    </FavoritesProvider>
  );
}

export default MyApp;
