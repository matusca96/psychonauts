import { useContext } from 'react';
import { CharacterContext } from '../../contexts/CharacterContext';
import { NoPowers } from '../utils/NoPowers';
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

        {character.psiPowers.length === 0 ? (
          <NoPowers />
        ) : (
          <ul>
            {character.psiPowers.map((power) => (
              <PowerItem key={power._id} power={power} />
            ))}
          </ul>
        )}
      </PowerList>
    </Container>
  );
}
