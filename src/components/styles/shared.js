/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';

export const StylesShared = html`
<style>
  :host {
    display: block;
    box-sizing: border-box;
  }

  a {
    color: #f0c674;
    text-decoration: none;
    transition: 200ms all ease;
  }

  a:hover {
    color: #b5bd68;
  }

  h2 {
    color: var(--app-drawer-selected-color);
    margin: 2rem 0;
    padding: 0.5rem 0;
    border-bottom: 6px solid rgba(0,0,0,0.1);
    font-size: 2.5rem;
    text-transform: lowercase;
  }

  h4 {
    color: var(--app-drawer-selected-color);
    margin-bottom: 0rem;
    text-transform: lowercase;
  }

  figure {
    margin: 0 0 1rem 0;
    padding: 1rem;
    background: rgba(0,0,0,0.1);
  }

  pre {
    overflow: auto;
  }

  code {
    padding: 0.25rem 1rem;
    display: inline-block;
    color: var(--app-drawer-selected-color);
    background: var(--app-drawer-background-color);
  }

  .box {
    width: 100%;
    background: #164965;
    display: block;
    color: #c5c8c6;
    padding: 1rem;
    box-sizing: border-box;
  }

  .btn {
    font-size: 1.5rem;
    padding: 0.75rem 2rem;
    text-decoration: none;
    background-color: #367536;
    color: var(--app-light-text-color);
    border: none;
    transition: 200ms all ease;
  }

  [layout*="flexcolumn"] .box {
    height: 100%;
  }

</style>
`;
