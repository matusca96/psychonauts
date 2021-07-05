import { FaStar } from 'react-icons/fa';
import { Container } from './styles';

export function Welcome(): JSX.Element {
  return (
    <Container>
      <div />
      <span>
        Bem-vindos psychonauts de todo o mundo! Aqui você poderá pesquisar sobre
        seus personagens favoritos utilizando a barra de pesquisa acima.
      </span>
      <section>
        <span>Ao encontrar seu personagem, favorite-o clicando na</span>
        <FaStar />
      </section>

      <strong>Divirtam-se!</strong>
    </Container>
  );
}
