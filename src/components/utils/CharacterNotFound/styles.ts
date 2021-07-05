import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto Mono';
  color: #142c30;

  svg {
    margin-top: 5rem;
    font-size: 10rem;
  }

  strong {
    font-size: 4rem;
    color: #142c30;
  }

  span {
    margin-top: 0.5rem;

    font-family: 'Roboto Mono';
    font-size: 1.5rem;
    text-align: center;

    color: #142c30;
  }
`;
