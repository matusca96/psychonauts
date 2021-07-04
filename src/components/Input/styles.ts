import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  flex: 1;

  display: flex;
  align-items: center;

  padding: 0.75rem;
  border: 2px solid #060d0e;
  border-radius: 0.5rem;
  background: #060d0e;
  transition: border 0.25s ease;

  &:focus-within {
    border: 2px solid #feee03;
  }

  & > svg {
    font-size: 2rem;
    transition: color 0.25s ease;
    color: ${({ isFocused }) => (isFocused ? '#feee03' : '#142c30')};
  }

  input {
    flex: 1;

    margin-left: 1rem;
    height: 100%;
    background: transparent;
    border: 0;
    outline: 0;

    font-family: 'Roboto Mono';
    font-size: 1.5rem;
    color: #ececec;

    &::placeholder {
      font-size: 1.25rem;
    }
  }

  button {
    border: 0;
    border-radius: 0.25rem;
    background: transparent;

    padding: 0.1rem;

    display: flex;
    align-items: center;
    transition: all 0.25s ease;

    &:hover {
      background: #0a1618;

      svg {
        color: #feee03;
      }
    }

    svg {
      font-size: 1.75rem;
      color: #142c30;
      transition: all 0.25s ease;
    }
  }
`;
