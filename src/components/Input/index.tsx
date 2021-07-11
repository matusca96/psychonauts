import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ForwardRefRenderFunction,
  forwardRef,
  useState,
  KeyboardEvent,
} from 'react';
import { IoSearch, IoClose } from 'react-icons/io5';
import { Container } from './styles';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  onClear: () => void;
}

export function Input({ onClear, value, ...rest }: InputProps): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container isFocused={isFocused}>
      <IoSearch />
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        type="text"
        {...rest}
      />
      {value && (
        <button type="button" onClick={onClear}>
          <IoClose />
        </button>
      )}
    </Container>
  );
}
