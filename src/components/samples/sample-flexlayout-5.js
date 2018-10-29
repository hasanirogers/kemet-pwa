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


class SampleFlexlayout5 extends LitElement {
  render() {
    return html`
      ${StylesKemet}
      ${StylesShared}
      <figure>
        <figcaption>
          <p>You can align all items by using <code>align</code> on your container or a specific item by using <code>align</code> on your item. Values are <code>top</code>, <code>middle</code>, <code>bottom</code>, <code>stretch</code>.</p>
        </figcaption>
        <div layout="flexrow" gutters="plus-1" align="middle" style="height: 64px;">
            <div align="bottom">
              <span class="box">Item 1</span>
            </div>
            <div><span class="box">Item 2</span></div>
            <div align="top">
              <span class="box">Item 3</span>
            </div>
            <div><span class="box">Item 4</span></div>
            <div align="bottom">
              <span class="box">Item 5</span>
            </div>
        </div>
        <syntax-highlight theme="hybrid"><div layout="flexrow" gutters="plus-1" align="middle" style="height: 64px;">
    <div align="bottom">
      <span class="box">Item 1</span>
    </div>
    <div><span class="box">Item 2</span></div>
    <div align="top">
      <span class="box">Item 3</span>
    </div>
    <div><span class="box">Item 4</span></div>
    <div align="bottom">
      <span class="box">Item 5</span>
    </div>
</div></syntax-highlight>
      </figure>
    `;
  }
}

window.customElements.define('sample-flexlayout-5', SampleFlexlayout5);
