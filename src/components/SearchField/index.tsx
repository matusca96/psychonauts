import { Input } from '../Input';
import { Container } from './styles';

export function SearchField() {
  return (
    <Container>
      <Input placeholder="Digite um nome de personagem" />
      <button type="button">Pesquisar</button>
    </Container>
  );
}
