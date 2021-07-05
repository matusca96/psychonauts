import { GiMale, GiFemale } from 'react-icons/gi';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useContext } from 'react';
import { Container } from './styles';
import { CharacterContext } from '../../../contexts/CharacterContext';
import { FavoritesContext } from '../../../contexts/FavoritesContext';

export function Header(): JSX.Element {
  const { character } = useContext(CharacterContext);
  const { addNewFavoriteCharacter, favoriteCharacters } =
    useContext(FavoritesContext);

  const isFavorited = favoriteCharacters.some(
    (char) => char._id === character._id,
  );

  return (
    <Container avatar={character.img} gender={character.gender}>
      <div>
        <aside>{character.gender === 'male' ? <GiMale /> : <GiFemale />}</aside>
      </div>
      <strong>{character.name}</strong>

      <button
        type="button"
        onClick={() => addNewFavoriteCharacter(character)}
        disabled={isFavorited}
      >
        {isFavorited ? <FaStar /> : <FaRegStar />}
      </button>
    </Container>
  );
}
