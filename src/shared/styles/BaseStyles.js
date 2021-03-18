import { createGlobalStyle } from 'styled-components';
import { colour, font } from './StyleConstants.js';

export default createGlobalStyle`
  html {
    font-size: 4vmax;
    ${font.regular};  
  }


  h1 {
    ${font.regular};
    ${font.size(1)};
    text-transform: uppercase;
    margin-bottom: 0rem;
  }

  h2 {
    ${font.regular};
    ${font.size(1)}
    margin: 0.3rem 0 1.5rem 0;  
  }

  h3 {
    ${font.regular};
    ${font.size(0.875)};
    margin: 1.8rem 0 1.2rem 0;
    text-align: center;
  }

  h4 {
    ${font.brand};
    ${font.size(1)};
    
  }

  p {
    ${font.regular};
    ${font.size(0.5)}
  }


  a {
    color: ${colour.primary};
    &:hover {
      color: ${colour.accent};
    }
    text-decoration: none;    
  }

  `;
