import { css } from "styled-components/macro";

const variables = css`
  :root {
    /* Colors */
    --color-primary-100: hsl(226, 47%, 80%);
    --color-primary-200: hsl(225, 40%, 67%);
    --color-primary-300: hsl(224, 35%, 55%);
    --color-primary-400: hsl(225, 32%, 46%);
    --color-primary-500: hsl(226, 41%, 37%);
    --color-primary-600: hsl(226, 43%, 34%);
    --color-primary-A700: hsl(233, 33%, 26%);
    --color-primary-800: hsl(227, 49%, 27%);
    --color-primary-A800: hsl(227, 32%, 24%);
    --color-primary-A800T: hsl(227 32% 24% / 0.9);
    --color-primary-900: hsl(230, 53%, 20%);
    --color-primary-A900: hsl(230, 35%, 18%);
    --color-primary-A900T: hsl(230 35% 18% / 0.9);
    --color-primary-A1000: hsl(230, 35%, 15%);
    --color-primary-A1100: hsl(230, 35%, 12%);

    --color-primary-300: hsl(230, 39%, 37%);
    --color-primary-500: hsl(230, 39%, 29%);
    --color-primary-600: hsl(235, 43%, 22%);
    --color-primary-700: hsl(234, 48%, 17%);
    --color-primary-700T: hsl(234 48% 17% / 0.9);
    --color-primary-800: hsl(232, 52%, 15%);
    --color-primary-900: hsl(230, 57%, 12%);
    --color-primary-900T: hsl(230 57% 12% / 0.8);

    --color-secondary-100: hsl(243, 60%, 81%);
    --color-secondary-200: hsl(243, 40%, 69%);
    --color-secondary-300: hsl(245, 20%, 56%);
    --color-secondary-400: hsl(248, 21%, 47%);
    --color-secondary-500: hsl(252, 32%, 39%);
    --color-secondary-600: hsl(252, 34%, 36%);
    --color-secondary-A600: hsl(308, 23%, 34%);
    --color-secondary-700: hsl(253, 30%, 29%);
    --color-secondary-800: hsl(255, 30%, 26%);
    --color-secondary-A800: hsl(296, 25%, 23%);
    --color-secondary-900: hsl(260, 30%, 18%);

    --color-grey-100: hsl(240, 0%, 84%);
    --color-grey-200: hsl(240, 3%, 77%);
    --color-grey-300: hsl(240, 5%, 50%);
    --color-grey-500: hsl(240, 8%, 30%);
    --color-grey-700: hsl(240, 10%, 12%);
    --color-grey-900: hsl(240, 10%, 8%);

    --color-text-highlight: #ffd780;

    --sidebar-color: hsl(230, 7%, 5%);
    --sidebar-text-color: hsl(0, 0%, 84%);
    --side-bar-text-faded: hsl(230, 15%, 52%);
    --main-color: var(--color-primary-A900);
    --button-color: hsl(226, 50%, 69%);

    /* Font-size */
    --fz-xs: 0.875rem;
    --fz-sm: 1rem;
    --fz-md: 1.125rem;
    --fz-lg: 1.25rem;
    --fz-xl: 1.5rem;
    --fz-xxl: 2rem;

    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 0.75rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-xxl: 3rem;

    /* Border-radius */
    --radius-subtle: 4px;
    --radius-small: 8px;
    --radius-large: 16px;
    --radius-pill: 30px;

    /* Shadows */
    --shadow-color: 234deg 53% 33%;
    --shadow-color-dark: 233deg 48% 9%;

    --shadow-elevation-low: 0.5px 0.4px 0.9px hsl(var(--shadow-color) / 0.1),
      0.9px 0.8px 1.6px -0.4px hsl(var(--shadow-color) / 0.23),
      1.9px 1.6px 3.4px -0.9px hsl(var(--shadow-color) / 0.35);
    --shadow-elevation-medium: 0.5px 0.4px 0.9px hsl(var(--shadow-color) / 0.11),
      2.1px 1.8px 3.8px -0.3px hsl(var(--shadow-color) / 0.2),
      4.4px 3.8px 7.9px -0.6px hsl(var(--shadow-color) / 0.3),
      9.4px 8.2px 17px -0.9px hsl(var(--shadow-color) / 0.4);
    --shadow-elevation-high: 0.5px 0.4px 0.9px hsl(var(--shadow-color) / 0.1),
      3.8px 3.4px 7px -0.1px hsl(var(--shadow-color) / 0.15),
      6.8px 6px 12.4px -0.3px hsl(var(--shadow-color) / 0.19),
      10.2px 9px 18.6px -0.4px hsl(var(--shadow-color) / 0.24),
      14.8px 13px 26.9px -0.5px hsl(var(--shadow-color) / 0.28),
      21.3px 18.6px 38.6px -0.6px hsl(var(--shadow-color) / 0.32),
      30.4px 26.6px 55.1px -0.8px hsl(var(--shadow-color) / 0.37),
      42.9px 37.6px 77.9px -0.9px hsl(var(--shadow-color) / 0.41);

    --shadow-elevation-low-dark: 0.5px 0.4px 0.9px
        hsl(var(--shadow-color-dark) / 0.1),
      0.9px 0.8px 1.6px -0.4px hsl(var(--shadow-color-dark) / 0.23),
      1.9px 1.6px 3.4px -0.9px hsl(var(--shadow-color-dark) / 0.35);
    --shadow-elevation-medium-dark: 0.5px 0.4px 0.9px
        hsl(var(--shadow-color-dark) / 0.11),
      2.1px 1.8px 3.8px -0.3px hsl(var(--shadow-color-dark) / 0.2),
      4.4px 3.8px 7.9px -0.6px hsl(var(--shadow-color-dark) / 0.3),
      9.4px 8.2px 17px -0.9px hsl(var(--shadow-color-dark) / 0.4);
    --shadow-elevation-high-dark: 0.5px 0.4px 0.9px
        hsl(var(--shadow-color-dark) / 0.1),
      3.8px 3.4px 7px -0.1px hsl(var(--shadow-color-dark) / 0.15),
      6.8px 6px 12.4px -0.3px hsl(var(--shadow-color-dark) / 0.19),
      10.2px 9px 18.6px -0.4px hsl(var(--shadow-color-dark) / 0.24),
      14.8px 13px 26.9px -0.5px hsl(var(--shadow-color-dark) / 0.28),
      21.3px 18.6px 38.6px -0.6px hsl(var(--shadow-color-dark) / 0.32),
      30.4px 26.6px 55.1px -0.8px hsl(var(--shadow-color-dark) / 0.37),
      42.9px 37.6px 77.9px -0.9px hsl(var(--shadow-color-dark) / 0.41);

    /* Images */

    /* Sizing */
    --sidebar-width: 200px;
    --content-max-width: 1400px;
  }
`;

export default variables;
