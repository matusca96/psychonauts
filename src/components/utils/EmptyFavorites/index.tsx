import { GiEmptyMetalBucketHandle } from 'react-icons/gi';
import { Container } from './styles';

export function EmptyFavorites(): JSX.Element {
  return (
    <Container>
      <GiEmptyMetalBucketHandle />
      <span>Sua lista de favoritos está vazia!</span>
    </Container>
  );
}
