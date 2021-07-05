import { GiSwordsPower } from 'react-icons/gi';
import { Container } from './styles';

export function NoPowers(): JSX.Element {
  return (
    <Container>
      <GiSwordsPower />
      <span>Este personagem não possui poderes! :(</span>
    </Container>
  );
}
