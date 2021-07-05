import { useContext } from 'react';
import Head from 'next/head';
import { CharacterCard } from '../components/CharacterCard';
import { FavoriteCard } from '../components/FavoriteCard';
import { Logo } from '../components/Logo';
import { SearchField } from '../components/SearchField';
import { Loading } from '../components/utils/Loading';
import { CharacterNotFound } from '../components/utils/CharacterNotFound';
import { CharacterContext } from '../contexts/CharacterContext';
import { FavoritesContext } from '../contexts/FavoritesContext';
import {
  Container,
  Content,
  Header,
  SearchCharacterContainer,
  MyFavoritesContainer,
} from './styles';
import { Welcome } from '../components/utils/Welcome';
import { EmptyFavorites } from '../components/utils/EmptyFavorites';

export default function Home(): JSX.Element {
  const { favoriteCharacters } = useContext(FavoritesContext);
  const { isLoading, notFound, isInFirstRender } = useContext(CharacterContext);

  return (
    <>
      <Head>
        <title>Psychonauts</title>
      </Head>
      <Container>
        <Header>
          <Logo />
        </Header>
        <Content>
          <SearchCharacterContainer>
            <SearchField />
            <hr />
            {(() => {
              if (isInFirstRender) {
                return <Welcome />;
              }

              if (isLoading) {
                return <Loading />;
              }

              if (notFound) {
                return <CharacterNotFound />;
              }

              return <CharacterCard />;
            })()}
          </SearchCharacterContainer>
          <MyFavoritesContainer>
            <strong>Meus favoritos</strong>
            {favoriteCharacters.length === 0 ? (
              <EmptyFavorites />
            ) : (
              <div>
                <ul>
                  {favoriteCharacters.map((char) => (
                    <FavoriteCard key={char._id} character={char} />
                  ))}
                </ul>
              </div>
            )}
          </MyFavoritesContainer>
        </Content>
      </Container>
    </>
  );
}
