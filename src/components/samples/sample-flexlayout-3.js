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


class SampleFlexlayout3 extends LitElement {
  render() {
    return html`
      ${StylesKemet}
      ${StylesShared}
      <figure>
        <figcaption>
          <p>You can add responsive gutters. The syntax is <code>[breakpoint]-[gutter-value]</code>. So for example, if you wanted the default value for gutters for all breakpoints use <code>tiny-default</code>. Remember, Kemet is mobile first so using tiny means "tiny and up."</p>
        </figcaption>
          <div layout="flexrow" gutters="tiny-none medium-default large-plus-6">
              <div breakpoint="medium-33"><span class="box">Item 1</span></div>
              <div><span class="box">Item 2</span></div>
              <div><span class="box">Item 3</span></div>
              <div><span class="box">Item 4</span></div>
          </div>
          <syntax-highlight theme="hybrid"><div layout="flexrow" gutters="tiny-none medium-default large-plus-6">
    <div breakpoint="medium-33"><span class="box">Item 1</span></div>
    <div><span class="box">Item 2</span></div>
    <div><span class="box">Item 3</span></div>
    <div><span class="box">Item 4</span></div>
</div></syntax-highlight>
      </figure>
    `;
  }
}

window.customElements.define('sample-flexlayout-3', SampleFlexlayout3);
