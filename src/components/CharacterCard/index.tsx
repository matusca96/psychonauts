import { useContext } from 'react';
import { CharacterContext } from '../../contexts/CharacterContext';
import { Header } from './Header';
import { PowerItem } from './PowerItem';
import { Container, PowerList, Title } from './styles';

export function CharacterCard(): JSX.Element {
  const { character } = useContext(CharacterContext);

  return (
    <Container>
      <Header />
      <PowerList>
        <Title>POWERS</Title>
        <ul>
          {character.psiPowers.map((power) => (
            <PowerItem key={power._id} power={power} />
          ))}
        </ul>
      </PowerList>
    </Container>
  );
}
