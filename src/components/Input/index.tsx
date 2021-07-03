import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { IoSearch, IoClose } from 'react-icons/io5';
import { Container } from './styles';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function Input({ ...rest }: InputProps): JSX.Element {
  return (
    <Container>
      <IoSearch />
      <input type="text" {...rest} />
      <button type="button">
        <IoClose />
      </button>
    </Container>
  );
}
