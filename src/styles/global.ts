import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    --colors-primary: #05445E;
    --colors-secondary: #75E6DA;
    --colors-background: #14202E;
  }

  body, input, button {
    font-family: 'Space Mono';
  }
`
