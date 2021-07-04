import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  padding: 0 1rem;

  div {
    width: 10rem;
    position: relative;

    img {
      max-width: 100%;
      border-radius: 50%;
    }

    aside {
      position: absolute;
      top: 0;
      right: 5%;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.3rem;
      border-radius: 50%;
      font-size: 1.5rem;

      background: #304ab3;
      color: #f1f1f1;
    }
  }

  strong {
    flex: 1;

    font-size: 3.5rem;
    text-transform: capitalize;
    letter-spacing: 0.25rem;

    margin-left: 2rem;
  }

  button {
    margin-left: 1rem;
    border: 0;
    background: transparent;
    font-size: 2.5rem;

    align-self: flex-start;
  }
`;
