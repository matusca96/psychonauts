import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1rem;

  div {
    margin-top: 2rem;
    width: 10rem;
    height: 10rem;

    background: url('https://psychonauts-api.herokuapp.com/images/api/characters/razputin-aquato.png');
    background-position: 90% 10%;
    background-size: cover;
    border-radius: 50%;
  }

  section {
    margin-top: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
      margin-top: 0.25rem;
      font-size: 2rem;
    }
  }

  & > span {
    margin-top: 1rem;
  }

  span {
    font-family: 'Roboto Mono';
    font-size: 1.5rem;
    text-align: center;
    color: #142c30;
  }

  strong {
    margin-top: 1rem;

    font-family: 'Roboto Mono';
    font-size: 2rem;

    color: #142c30;
  }
`;
