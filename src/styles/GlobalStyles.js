import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
  * {
    box-sizing: border-box;
  }
  h1, h2, h3 {
    margin: 0 0 16px;
  }
  .card {
    background-color: ${props => props.theme.colors.card};
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    padding: 24px;
    transition: transform 0.2s ease;
  }
  .card:hover {
    transform: scale(1.02);
  }
  button {
    cursor: pointer;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    transition: transform 0.2s ease;
  }
  button:hover {
    transform: scale(1.05);
  }
  button:focus {
    outline: 2px solid ${props => props.theme.colors.accent};
    outline-offset: 2px;
  }
`;

export default GlobalStyles;