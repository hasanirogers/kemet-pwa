import { css } from 'lit-element';

export const stylesBase = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  p {
    margin-bottom: 1rem;
  }

  article {
    padding: 2rem;
  }

  article a {
    color: var(--app-tertiary-color);
    transition: all 300ms ease;
  }

  article a:hover {
    color: var(--app-tertiary-color-75);
  }

  ol {
    margin: 0;
    padding: 0;
    list-style-position: inside;
  }

  ol li {
    margin-bottom: 1rem;
  }

  th,
  td {
    text-align: left;
    padding: 0.5rem;
    border: 1px solid var(--app-black-25);
  }

  @media screen and (min-width: 768px) {
    article {
      max-width: 1280px;
      margin: auto;
      padding-right: 2rem;
      padding-left: calc(var(--app-drawer-width) + 2rem);
    }
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
    color: var(--app-white-rich);
    display: inline-block;
    padding: 3px;
    background: var(--app-primary-color-75);
  }

  pre code {
    padding: 1rem !important;
  }

  figure {
    margin: 0 0 1rem 0;
    padding: 1rem;
    border: 1px solid var(--app-black-25);
  }

  figure .box {
    width: 100%;
    background: var(--app-primary-color);
    display: block;
    color: var(--app-white-rich);
    padding: 1rem;
    box-sizing: border-box;
  }

  figure [layout*="flexcolumn"] .box {
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
