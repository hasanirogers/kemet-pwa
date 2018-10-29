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
import { PageViewElement } from '../helpers/page-view-element.js';

import { StylesKemet } from '../styles/kemet.js'
import { StylesShared } from '../styles/shared.js';

// browser icons
import { chrome } from '../kemet-icons.js';
import { firefox } from '../kemet-icons.js';
import { ie } from '../kemet-icons.js';
import { edge } from '../kemet-icons.js';
import { safari } from '../kemet-icons.js';
import { opera } from '../kemet-icons.js';

class ViewHome extends PageViewElement {
  render() {
    return html`
      ${StylesKemet}
      ${StylesShared}
      <style>
        section {
          padding-top: 1rem;
          text-align: center;
        }

        code {
          padding: 0.5rem 1rem;
        }

        footer {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
        }

        svg {
          width: 48px;
          height: auto;
        }

        .download {
          margin: 2rem 0;
        }

        .download > *:not(:last-child) {
          margin-right: 2rem;
        }

        .browsers {
          padding: 0;
          display: inline-flex;
          list-style: none;
        }

        .browsers > * {
          margin: 0 1rem;
          flex: 0 0 auto;
        }

      </style>
      <section>
        <div class="download">
          <a class="btn" href="https://github.com/hasanirogers/kemet-scss/archive/master.zip">Download</a>
          <a class="btn" href="https://github.com/hasanirogers/kemet-scss">Github</a>
        </div>
        <code>npm install kemet-scss --save</code>
        <p>Once you've installed the styles just include kemet.min.css in your document like you would any other css file. Also, <a href="https://github.com/hasanirogers/kemet-sass/blob/master/dist/kemet-styles/kemet-styles.scss">Kemet comes bundled with its sass source files</a>. If you want to customize how the styles behave you can use this sass file. See <a href="/app/sass">Sass Docs</a> for more info.</p>
        <h2>Works in all major browsers.</h2>
        <ul class="browsers">
          <li>${chrome}</h1>
          <li>${firefox}</h1>
          <li>${ie}</h1>
          <li>${edge}</h1>
          <li>${safari}</h1>
          <li>${opera}</h1>
        </ul>
      </section>
    `;
  }
}

window.customElements.define('view-home', ViewHome);
