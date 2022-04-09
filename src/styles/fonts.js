import { css } from "styled-components/macro";

const fonts = css`
  @font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto-Regular.woff2') format('woff2'),
    url('..fonts/Roboto-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto-Bold.woff2') format('woff2'),
    url('..fonts/Roboto-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto-Italic.woff2') format('woff2'),
    url('..fonts/Roboto-Italic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto-BoldItalic.woff2') format('woff2'),
    url('..fonts/Roboto-BoldItalic.woff') format('woff');
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: 'Lora';
    src: url('../fonts/Lora-VariableFont_wght.woff2') format('woff2 supports variations'),
    url('../fonts/Lora-VariableFont_wght.woff2') format('woff2-variations');
    font-weight: 400 700;
  }
  @font-face {
    font-family: 'Lora';
    src: url('../../public/fonts/Lora-Italic-VariableFont_wght.woff2') format('woff2 supports variations'),
    url('../fonts/Lora-Italic-VariableFont_wght.woff2') format('woff2-variations');
    font-weight: 400 700;
    font-style: italic;
  }
`;

export default fonts;