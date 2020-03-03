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

  h1 {
    font-size: 2rem;
  }

  @media screen and (min-width: 768px) {
    article h1 {
      margin-top: 0;
    }
  }

  pre {
    margin-top: 1rem;
    overflow: auto;
  }

  code {
    display: inline-block;
  }

  pre code {
    padding: 1rem !important;
  }

  figure {
    margin: 0 0 1rem 0;
    padding: 1rem;
    border: 1px solid var(--app-black-25);
  }

  .box {
    width: 100%;
    background: var(--app-primary-color);
    display: block;
    color: var(--app-white-rich);
    padding: 1rem;
    box-sizing: border-box;
  }

  [layout*="flexcolumn"] .box {
    height: 100%;
  }
`;

export const stylesRSCSS = css`
  /* select-box */

  .select-box {
    cursor: pointer;
    position: relative;
    background: var(--app-white);
    box-shadow: 0 15px 30px -10px var(--app-black-10);
  }

  .select-box::after {
    content: "╲╱";
    font-size: 0.5rem;
    font-weight: bold;
    display: block;
    position: absolute;
    top: 50%;
    right: 1rem;
    pointer-events: none;
    transform: translateY(-50%) scaleX(1.5);
  }

  .select-box > .select {
    width: 100%;
    border: none;
    padding: 0.75rem 1rem;
    box-shadow: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: none;
    background-color: transparent;
  }


  /* standard-btn */

  .standard-btn {
    position: relative;
    display: inline-block;
    padding: 1rem;
    text-decoration: none;
    color: var(--app-white-rich) !important;
    background: var(--app-primary-color);
    transition: filter 300ms ease, color 300ms ease;
  }

  .standard-btn:hover {
    filter: brightness(150%);
  }


  /* helpers */

  ._responsiveimg {
    max-width: 100%;
    height: auto;
  }
`;

export const stylesKemetDrawer = css`
  kemet-drawer {
    --kemet-drawer-width: var(--app-drawer-width);
    --kemet-drawer-background: var(--app-primary-color);
  }
`;
