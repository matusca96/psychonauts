import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 10rem;
    color: #142c30;
  }

  span {
    margin-top: 0.5rem;

    font-family: 'Roboto Mono';
    font-size: 1.5rem;
    color: #142c30;
  }
`;
