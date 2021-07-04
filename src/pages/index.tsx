import { CharacterCard } from '../components/CharacterCard';
import { FavoriteCard } from '../components/FavoriteCard';
import { Input } from '../components/Input';
import { Logo } from '../components/Logo';
import { SearchField } from '../components/SearchField';
import {
  Container,
  Content,
  Header,
  SearchCharacterContainer,
  MyFavoritesContainer,
} from './styles';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Content>
        <SearchCharacterContainer>
          <SearchField />
          <hr />
          <CharacterCard />
        </SearchCharacterContainer>
        <MyFavoritesContainer>
          <strong>Meus favoritos</strong>
          <div>
            <ul>
              <FavoriteCard />
            </ul>
          </div>
        </MyFavoritesContainer>
      </Content>
    </Container>
  );
}
