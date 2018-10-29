/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';

// These are the shared styles needed by this element.
import { StylesShared } from '../styles/shared.js';


class TemplateBlock extends LitElement {
  static get properties() {
    return {
      slug: { type: String },
      header: { type: String },
      desc: { type: String },
      thumbnail: { type: String }
    }
  }

  render() {
    return html`
      ${StylesShared}
      <style>
        img {
          width: 100%;
        }

        .img {
          background: var(--app-light-text-color);
          padding: 1rem;
          border-radius: 1rem;
        }
      </style>
      <div>
        <div class="img"><img src="/images/templates/${this.slug}.svg"></div>
        <h3>${this.header}</h3>
        <p>${this.desc}</p>
        <a class="btn" target="_blank" href="/demo/templates/${this.slug}">View Demo</a>
      </div>
    `;
  }
}

window.customElements.define('template-block', TemplateBlock);
