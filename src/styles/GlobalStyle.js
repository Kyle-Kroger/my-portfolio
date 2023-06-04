import { createGlobalStyle } from "styled-components/macro";
import reset from "./reset";
import variables from "./variables.globals";
import { QUERIES } from "../constants";

const GlobalStyle = createGlobalStyle`
  ${reset}
  //Fonts have moved to a app.css to prevent flickers
  ${variables}

  :root {
    @media ${QUERIES.phone} {
      --fz-lg: 1.125rem;
      --fz-xl: 1.25rem;
    }
  }

  html {
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
  }
  
  body {
    font-family: 'Roboto', 'sans-serif';
    line-height: 1.4;
    color: white;
  }

  h1, h2{
    letter-spacing: 1px;
  }

  h1 {
    font-size: clamp(
      2rem,
      2.2vw + 1.5rem,
      4rem
    );
    font-weight: 700;
  }

  h2 {
    font-size: clamp(
      1.2rem,
      2vw + 1rem,
      2.8rem
    );
  }

  h3 {
    font-size: clamp(
      1rem,
      1.8vw + 0.75rem,
      2.2rem
    );
    font-weight: 500;
  }

  h4 {
    font-size: clamp(
      1rem,
      2vw + 1rem,
      1.4rem
    );
  }

  img {
    width: 100%;
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
