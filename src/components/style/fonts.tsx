import Italiana from "../../fonts/Italiana-Regular.ttf";
import OpenSans from "../../fonts/OpenSans.ttf";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Italiana';
    src: url(${Italiana}) format('truetype');
    
  }
  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSans}) format('truetype');
    
  }
  
  h1,h2 {
    font-family: 'Italiana';
  }

  h3, h4,h5 {
    font-family: 'Italiana';
  }
 
p {
    font-family: 'OpenSans';
}
a, button {
    font-family: 'OpenSans';
  }
`;
