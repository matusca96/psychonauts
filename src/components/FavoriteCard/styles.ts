import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;

  border-radius: 0.5rem;
  padding: 0.5rem 1rem;

  background: #142c30;

  img {
    width: 2.5rem;
  }

  strong {
    margin-left: 0.5rem;
    flex: 1;

    font-family: 'Roboto Mono';
    font-size: 1.75rem;
    text-transform: capitalize;

    color: #f1f1f1;
  }

  button {
    padding: 0.5rem;
    border: 0;

    color: #060d0e;
    background: #feee03;

    border-radius: 0.5rem;
    transition: filter 0.25s ease;

    &:hover {
      filter: opacity(0.75);
    }

    &:active {
      filter: opacity(0.6);
    }
  }
`;
