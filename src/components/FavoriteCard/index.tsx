import { Container } from './styles';

export function FavoriteCard(): JSX.Element {
  return (
    <Container>
      <img
        src="https://psychonauts-api.herokuapp.com/images/api/characters/razputin-aquato.png"
        alt="Avatar"
      />
      <strong>razputin aquato</strong>
      <button type="button">Remover</button>
    </Container>
  );
}
