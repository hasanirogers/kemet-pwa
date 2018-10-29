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


class SampleFlexlist2 extends LitElement {
  render() {
    return html`
      ${StylesKemet}
      ${StylesShared}
      <figure>
        <figcaption>
          <p>You can prioritize elements at a breakpoint using the order attribute.</p>
        </figcaption>
        <div layout="flexlist" gutters>
          <div><span class="box">One</span></div>
          <div><span class="box">Two</span></div>
          <div><span class="box">Three</span></div>
          <div order="medium-minus-1"><span class="box" style="background:darkgoldenrod;">Four</span></div>
          <div order="medium-minus-1"><span class="box" style="background:darkgoldenrod;">Five</span></div>
          <div><span class="box">Six</span></div>
        </div>
        <syntax-highlight theme="hybrid"><div layout="flexlist" gutters>
  <div><span class="box">One</span></div>
  <div><span class="box">Two</span></div>
  <div><span class="box">Three</span></div>
  <div order="medium-minus-1"><span class="box" style="background:darkgoldenrod;">Four</span></div>
  <div order="medium-minus-1"><span class="box" style="background:darkgoldenrod;">Five</span></div>
  <div><span class="box">Six</span></div>
</div></syntax-highlight>
      </figure>
    `;
  }
}

window.customElements.define('sample-flexlist-2', SampleFlexlist2);
