import { GiMale, GiFemale } from 'react-icons/gi';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Container } from './styles';

export function Header(): JSX.Element {
  return (
    <Container>
      <div>
        <img
          src="https://psychonauts-api.herokuapp.com/images/api/characters/razputin-aquato.png"
          alt="Avatar"
        />
        <aside>
          <GiMale />
        </aside>
      </div>
      <strong>razputin aquato</strong>

      <button type="button">
        <FaRegStar />
      </button>
    </Container>
  );
}
