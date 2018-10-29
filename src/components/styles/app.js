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

export const StylesApp = html`
  <style>
    :host {
      --app-drawer-width: 256px;

      --app-primary-color: #243138;
      --app-secondary-color: #1b242a;
      --app-dark-text-color: var(--app-secondary-color);
      --app-light-text-color: white;
      --app-link-color: #f0c674;

      --app-header-background-color: white;
      --app-header-text-color: var(--app-dark-text-color);
      --app-header-selected-color: var(--app-primary-color);

      --app-drawer-background-color: var(--app-secondary-color);
      --app-drawer-text-color: var(--app-light-text-color);
      --app-drawer-selected-color: #78909C;

      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }

    main {
      flex: 1;
      margin: auto;
      padding: 0 1rem;
      max-width: 1024px;
      width: 100%;
      box-sizing: border-box;
    }

    app-toolbar {
      height: auto;
      --layout-horizontal_-_flex-direction: column;
      --layout-center_-_align-items: center;
    }

    app-header {
      text-align: center;
      background-color: var(--app-header-background-color);
      color: var(--app-header-text-color);
      border-bottom: 1px solid #eee;
    }

    .toolbar-top {
      background-color: var(--app-header-background-color);
    }

    [main-title] {
      font-family: 'Oldenburg', cursive;
      text-transform: lowercase;
      font-size: 3rem;
      margin: 0;
    }

    .toolbar-list {
      display: none;
    }

    .toolbar-list > a {
      display: inline-block;
      color: var(--app-header-text-color);
      text-decoration: none;
      line-height: 30px;
      padding: 4px 24px;
    }

    .toolbar-list > a:hover {
      color: var(--app-link-color);
    }

    .toolbar-list > a[selected] {
      color: var(--app-header-selected-color);
      border-bottom: 4px solid var(--app-header-selected-color);
    }

    .menu-btn {
      position: fixed;
      top: 0;
      left: 1rem;
      background: none;
      border: none;
      fill: var(--app-header-text-color);
      cursor: pointer;
      height: 44px;
      width: 44px;
    }

    .drawer-list {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 24px;
      background: var(--app-drawer-background-color);
      position: relative;
    }

    .drawer-list > a {
      display: block;
      text-decoration: none;
      color: var(--app-drawer-text-color);
      line-height: 40px;
      padding: 0 24px;
    }

    .drawer-list > a[selected] {
      color: var(--app-drawer-selected-color);
    }

    /* Workaround for IE11 displaying <main> as inline */
    main {
      display: block;
    }

    .page {
      display: none;
    }

    .page[active] {
      display: block;
    }

    footer {
      padding: 24px;
      background: var(--app-drawer-background-color);
      color: var(--app-drawer-text-color);
      text-align: center;
    }

    svg#anubis {
      width: 256px;
      height: 256px;
      fill: var(--app-primary-color);
    }

    /* Wide layout: when the viewport width is bigger than 460px, layout
    changes to a wide layout. */
    @media (min-width: 640px) {
      .toolbar-list {
        display: block;
        margin-top: 1rem
      }

      .menu-btn {
        display: none;
      }

      .main-content {
        padding-top: 107px;
      }
    }
  </style>
`;
