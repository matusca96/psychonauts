import { Input } from '../components/Input';
import { Logo } from '../components/Logo';
import {
  Container,
  Content,
  Header,
  SearchCharacterContainer,
  MyFavoritesContainer,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Content>
        <SearchCharacterContainer>
          <header>
            <Input placeholder="Digite um nome de personagem" />
            <button type="button">Pesquisar</button>
          </header>
        </SearchCharacterContainer>
        <MyFavoritesContainer />
      </Content>
    </Container>
  );
}
