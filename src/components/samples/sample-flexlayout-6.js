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
import { StylesKemet } from '../styles/kemet.js'


class SampleFlexlayout6 extends LitElement {
  render() {
    return html`
      ${StylesKemet}
      ${StylesShared}
      <figure>
        <figcaption>
          <p>You can align acrosss the x-axis with <code>cross-align</code>. Cross align can only be used on a container and effects all items. Values include <code>left</code>, <code>right</code>, <code>center</code>, <code>between</code>, and <code>around</code>.</p>
        </figcaption>
        <div layout="flexrow" cross-align="between">
            <div breakpoint="tiny-66"><span class="box">Left</span></div>
            <div breakpoint="tiny-content"><span class="box">Right</span></div>
        </div>
        <syntax-highlight theme="hybrid"><div layout="flexrow" cross-align="between">
    <div breakpoint="tiny-66"><span class="box">Left</span></div>
    <div breakpoint="tiny-content"><span class="box">Right</span></div>
</div></syntax-highlight>
      </figure>
    `;
  }
}

window.customElements.define('sample-flexlayout-6', SampleFlexlayout6);
