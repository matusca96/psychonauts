import styled from 'styled-components';

export const Container = styled.li`
  padding: 0 1rem;

  & > div {
    width: 100%;
    border-radius: 0.5rem;
    padding: 0.5rem;

    display: flex;
    align-items: center;

    background: #142c30;

    img {
      width: 3rem;
    }

    div {
      display: flex;
      flex-direction: column;

      margin-left: 0.5rem;

      strong {
        font-family: 'Roboto Mono';
        text-transform: uppercase;

        color: #ececec;
      }

      span {
        margin-top: 0.25rem;

        font-family: 'Roboto Mono';

        color: #f1f1f1;
      }
    }
  }
`;
