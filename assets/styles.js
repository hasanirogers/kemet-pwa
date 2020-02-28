import { css } from 'lit-element';

export const stylesBase = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
  }

  a:visited {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin-bottom: 1rem;
  }

  pre {
    margin: 0;
  }
`;

export const stylesKemetDrawer = css`
  kemet-drawer {
    --kemet-drawer-width: var(--app-drawer-width);
    --kemet-drawer-background: var(--app-primary-color);
  }
`;
