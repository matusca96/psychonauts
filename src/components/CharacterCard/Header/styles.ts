import styled from 'styled-components';

interface HeaderProps {
  avatar: string;
  gender: string;
}

export const Container = styled.header<HeaderProps>`
  display: flex;
  align-items: center;

  padding: 0 2rem;

  div {
    width: 10rem;
    height: 10rem;

    background: url(${({ avatar }) => avatar});
    background-position: 90% 10%;
    background-size: cover;
    border-radius: 50%;

    position: relative;

    aside {
      z-index: 2;
      position: absolute;
      top: 0;
      right: 0%;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.3rem;
      border-radius: 50%;
      font-size: 1.5rem;

      background: ${({ gender }) =>
        gender === 'male'
          ? 'rgba(175, 255, 248, 0.8)'
          : 'rgba(246, 169, 230, 0.8)'};
      color: #242424;
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
