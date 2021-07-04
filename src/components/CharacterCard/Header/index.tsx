import { GiMale, GiFemale } from 'react-icons/gi';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useContext } from 'react';
import { Container } from './styles';
import { CharacterContext } from '../../../contexts/CharacterContext';

export function Header(): JSX.Element {
  const { character } = useContext(CharacterContext);

  return (
    <Container avatar={character.img} gender={character.gender}>
      <div>
        <aside>{character.gender === 'male' ? <GiMale /> : <GiFemale />}</aside>
      </div>
      <strong>{character.name}</strong>

      <button type="button">
        <FaRegStar />
      </button>
    </Container>
  );
}
