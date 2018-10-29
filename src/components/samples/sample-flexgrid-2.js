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


class SampleFlexgrid2 extends LitElement {
  render() {
    return html`
      ${StylesKemet}
      ${StylesShared}
      <figure>
        <figcaption>
          <p>Use <code>basis</code> on large flexgrids where you want specific columns and don't need individual control over items. You can change the columns at their respective breakpoints.</p>
        </figcaption>
        <div layout="flexgrid" gutters basis="tiny-4-columns medium-6-columns huge-12-columns">
          <div><span class="box">1</span></div>
          <div><span class="box">2</span></div>
          <div><span class="box">3</span></div>
          <div><span class="box">4</span></div>
          <div><span class="box">5</span></div>
          <div><span class="box">6</span></div>
          <div><span class="box">7</span></div>
          <div><span class="box">8</span></div>
          <div><span class="box">9</span></div>
          <div><span class="box">10</span></div>
          <div><span class="box">11</span></div>
          <div><span class="box">12</span></div>
        </div>
        <syntax-highlight theme="hybrid"><div layout="flexgrid" gutters basis="tiny-4-columns medium-6-columns huge-12-columns">
  <div><span class="box">1</span></div>
  <div><span class="box">2</span></div>
  <div><span class="box">3</span></div>
  <div><span class="box">4</span></div>
  <div><span class="box">5</span></div>
  <div><span class="box">6</span></div>
  <div><span class="box">7</span></div>
  <div><span class="box">8</span></div>
  <div><span class="box">9</span></div>
  <div><span class="box">10</span></div>
  <div><span class="box">11</span></div>
  <div><span class="box">12</span></div>
</div></syntax-highlight>
      </figure>
    `;
  }
}

window.customElements.define('sample-flexgrid-2', SampleFlexgrid2);
