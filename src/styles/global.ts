import { createGlobalStyle } from 'styled-components';
import Desigers from '../assets/fonts/Desigers-Bold.ttf';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
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
  }

  body, input, button, span {
    font: 1rem Morn;
    color: #f1f1f1;
  }

  strong {
    color: #f1f1f1;
  }

  html, body, #root, #root>div {
    height: 100%
  }

  button {
    cursor: pointer;
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
