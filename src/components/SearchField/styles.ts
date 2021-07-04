import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  padding: 1rem;

  & > button {
    margin-left: 1rem;
    padding: 0.5rem;

    display: flex;
    align-items: center;

    border: 0;
    border-radius: 0.5rem;
    background: #feee03;
    color: #060d0e;

    font-size: 1.5rem;
    letter-spacing: 1px;
    transition: filter 0.25s ease;

    &:hover {
      filter: opacity(0.75);
    }

    &:active {
      filter: opacity(0.6);
    }

    &:disabled {
      cursor: not-allowed;
      filter: opacity(0.75);
    }
  }
`;
