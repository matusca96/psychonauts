import { Header } from './Header';
import { PowerItem } from './PowerItem';
import { Container, PowerList, Title } from './styles';

export function CharacterCard(): JSX.Element {
  return (
    <Container>
      <Header />
      <PowerList>
        <Title>POWERS</Title>
        <ul>
          <PowerItem />
          <PowerItem />
          <PowerItem />
          <PowerItem />
          <PowerItem />
          <PowerItem />
          <PowerItem />
          <PowerItem />
        </ul>
      </PowerList>
    </Container>
  );
}
