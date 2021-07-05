import { FaSadCry } from 'react-icons/fa';
import { Container } from './styles';

export function CharacterNotFound(): JSX.Element {
  return (
    <Container>
      <FaSadCry />
      <strong>Oops!</strong>
      <span>
        Nenhum psychonaut com este nome foi avistado no acampamento Whispering
        Rock Psychic.
      </span>
    </Container>
  );
}
