import { useContext } from 'react';
import { Character } from '../../contexts/CharacterContext';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import { Container } from './styles';

interface FavoriteCardProps {
  character: Character;
}

export function FavoriteCard({ character }: FavoriteCardProps): JSX.Element {
  const { removeFavoriteCharacter } = useContext(FavoritesContext);

  return (
    <Container avatar={character.img}>
      <div />
      <strong>{character.name}</strong>
      <button
        type="button"
        onClick={() => removeFavoriteCharacter(character._id)}
      >
        Remover
      </button>
    </Container>
  );
}
