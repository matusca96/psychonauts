import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const PowerList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  ul {
    overflow-y: auto;
    margin-top: 1.5rem;
    list-style: none;

    li + li {
      margin-top: 1rem;
    }
  }
`;

export const Title = styled.div`
  max-width: 18%;
  margin-left: 1rem;
  padding: 0.25rem;

  display: flex;
  justify-content: center;

  font-size: 1.5rem;
  font-family: 'Roboto Mono';
  font-weight: bold;
  letter-spacing: 0.2rem;

  border-radius: 0.5rem;

  background: #142c30;
`;
