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

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { onClear, onKeyDown, value, ...rest },
  ref,
): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  function handleOnKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== 'Enter') {
      return;
    }

    onKeyDown(e);
    onBlur();
  }

  return (
    <Container isFocused={isFocused}>
      <IoSearch />
      <input
        ref={ref}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={(e) => handleOnKeyDown(e)}
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
};

export const Input = forwardRef(InputBase);
