import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.header`
  max-width: 1480px;
  width: 100%;
  margin: 0 auto;
  height: 8rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 1rem 2rem;

  display: flex;
`;

export const SearchCharacterContainer = styled.div`
  background: rgba(7, 15, 16, 0.92);

  flex: 1;
  height: 100%;
  border-radius: 1rem;

  header {
    display: flex;
    padding: 1rem;

    & > button {
      margin-left: 1rem;
      padding: 0.75rem;

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
    }
  }
`;

export const MyFavoritesContainer = styled.div`
  background: rgba(7, 15, 16, 0.92);

  flex: 1;
  height: 100%;
  margin-left: 2rem;
  border-radius: 1rem;
`;
