import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  ${'0%'} {
    transform: scale(1);
  }
  ${'50%'} {
    transform: scale(1.1);
  }
  ${'100%'} {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20rem;
    animation: ${pulse} 1.5s linear infinite;
  }
`;
