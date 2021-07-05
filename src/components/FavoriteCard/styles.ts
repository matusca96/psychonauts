import styled from 'styled-components';

interface ContainerProps {
  avatar: string;
}

export const Container = styled.li<ContainerProps>`
  display: flex;
  align-items: center;

  border-radius: 0.5rem;
  padding: 0.5rem 1rem;

  background: #142c30;

  div {
    width: 4.5rem;
    height: 4.5rem;

    background: url(${({ avatar }) => avatar});
    background-position: 90% 10%;
    background-size: cover;

    border-radius: 50%;
  }

  strong {
    margin-left: 1rem;
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
