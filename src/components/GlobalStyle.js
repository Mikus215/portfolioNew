import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    color: white;
    background: #1b1b1b;
    font-family: 'Source Sans Pro', sans-serif;
}

`;

export default GlobalStyle;