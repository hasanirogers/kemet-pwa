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

import { StylesShared } from '../styles/shared.js';
import { StylesKemet } from '../styles/kemet.js';


class SampleFlexgrid1 extends LitElement {
  render() {
    return html`
      ${StylesKemet}
      ${StylesShared}
      <figure>
        <div layout="flexgrid" gutters="plus-1">
            <div breakpoint="tiny-100 medium-33 large-25">
              <span class="box">1</span>
            </div>
            <div breakpoint="tiny-50 medium-33 large-25">
              <span class="box">2</span>
            </div>
            <div breakpoint="tiny-50 medium-33 large-25">
              <span class="box">3</span>
            </div>
            <div breakpoint="tiny-100 medium-100 large-25">
              <span class="box">4</span>
            </div>
        </div>
        <syntax-highlight theme="hybrid"><div layout="flexgrid" gutters="plus-1">
    <div breakpoint="tiny-100 medium-33 large-25">
      <span class="box">1</span>
    </div>
    <div breakpoint="tiny-50 medium-33 large-25">
      <span class="box">2</span>
    </div>
    <div breakpoint="tiny-50 medium-33 large-25">
      <span class="box">3</span>
    </div>
    <div breakpoint="tiny-100 medium-100 large-25">
      <span class="box">4</span>
    </div>
</div></syntax-highlight>
      </figure>
    `;
  }
}

window.customElements.define('sample-flexgrid-1', SampleFlexgrid1);
