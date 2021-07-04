import { createGlobalStyle } from 'styled-components';
import Desigers from '../assets/fonts/Desigers-Bold.ttf';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: Desigers;
    font-style: bold;
    font-weight: 800;
    src: url(${Desigers}) format('truetype');
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('./assets/bg.png') no-repeat;
    background-size: cover;
  }

  body, input, button, span {
    font: 1rem Desigers;
    color: #feee03;
  }

  strong {
    color: #feee03;
  }

  html, body, #root, #root>div {
    height: 100%
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar{
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb{
    background: linear-gradient(13deg, #142C30 21%,#142C30 69%);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track{
    background: #060D0E;
    border-radius: 10px;
  }

  @media(max-width: 1366px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
