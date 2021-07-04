import { Container } from './styles';

export function PowerItem() {
  return (
    <Container>
      <div>
        <img
          src="https://psychonauts-api.herokuapp.com/images/api/clairvoyance.png"
          alt="Power"
        />
        <div>
          <strong>clairvoyance</strong>
          <span>Allows the user to see through the minds of others.</span>
        </div>
      </div>
    </Container>
  );
}
