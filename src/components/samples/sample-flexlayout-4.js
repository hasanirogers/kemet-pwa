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


class SampleFlexlayout4 extends LitElement {
  render() {
    return html`
      ${StylesKemet}
      ${StylesShared}
      <figure>
        <figcaption>
          <p>You can control the size items at each breakpoint with <code>breakpoint</code>. The syntax is <em>breakpoint-size</em>. <code>-content</code> means fit item's content. All other sizes are numerical multiples of 5 (5-100) and also <code>-33</code> and <code>-66</code>. You only need to add breakpoints to items that you want to size. Items without breakpoints will equally distribute.</p>
        </figcaption>
        <div layout="flexrow" flex-items gutters="minus-1" >
            <div breakpoint="tiny-content">
              <span class="box">&hearts;</span>
            </div>
            <div><span class="box">Item 2</span></div>
            <div><span class="box">Item 3</span></div>
            <div breakpoint="tiny-50"><span class="box">Item 4</span></div>
        </div>
        <syntax-highlight theme="hybrid"><div layout="flexrow" flex-items gutters="minus-1" >
    <div breakpoint="tiny-content">
      <span class="box">&hearts;</span>
    </div>
    <div><span class="box">Item 2</span></div>
    <div><span class="box">Item 3</span></div>
    <div breakpoint="tiny-50"><span class="box">Item 4</span></div>
</div></syntax-highlight>
      </figure>
    `;
  }
}

window.customElements.define('sample-flexlayout-4', SampleFlexlayout4);
