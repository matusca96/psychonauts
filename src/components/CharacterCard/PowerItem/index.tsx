import { Power } from '../../../contexts/CharacterContext';
import { Container } from './styles';

interface PowerItemProps {
  power: Power;
}

export function PowerItem({ power }: PowerItemProps): JSX.Element {
  return (
    <Container>
      <div>
        <img src={power.img} alt="Power" />
        <div>
          <strong>{power.name}</strong>
          <span>{power.description}</span>
        </div>
      </div>
    </Container>
  );
}
