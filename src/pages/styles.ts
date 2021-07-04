import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
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
  overflow-y: auto;

  display: flex;
`;

export const SearchCharacterContainer = styled.div`
  background: rgba(7, 15, 16, 0.92);

  flex: 1;
  height: 100%;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  overflow-y: auto;

  hr {
    height: 1px;
    width: 95%;
    margin: 1rem auto;
    border: 0;
    border-top: 1px solid #242424;
  }
`;

export const MyFavoritesContainer = styled.div`
  background: rgba(7, 15, 16, 0.92);

  flex: 1;
  height: 100%;
  margin-left: 2rem;
  border-radius: 1rem;
`;
