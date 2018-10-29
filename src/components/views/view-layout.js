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

// sample elements
import '../samples/sample-flexlayout-1.js';
import '../samples/sample-flexlayout-2.js';
import '../samples/sample-flexlayout-3.js';
import '../samples/sample-flexlayout-4.js';
import '../samples/sample-flexlayout-5.js';
import '../samples/sample-flexlayout-6.js';
import '../samples/sample-flexgrid-1.js';
import '../samples/sample-flexgrid-2.js';
import '../samples/sample-flexcolumn-1.js';
import '../samples/sample-flexcolumn-2.js';
import '../samples/sample-flexlist-1.js';
import '../samples/sample-flexlist-2.js';
import '../samples/sample-flexlist-3.js';


class ViewLayout extends PageViewElement {
  render() {
    return html`
      ${StylesKemet}
      ${StylesShared}
      <section>
        <h2>Flexrow</h2>
        <p>Flexrow allows you to layout items in row (a flexbox line). Add as many items to the row as you like and sizing is largely automated.</p>
        <sample-flexlayout-1></sample-flexlayout-1>
        <sample-flexlayout-2></sample-flexlayout-2>
        <sample-flexlayout-3></sample-flexlayout-3>
        <sample-flexlayout-4></sample-flexlayout-4>
        <sample-flexlayout-5></sample-flexlayout-5>
        <sample-flexlayout-6></sample-flexlayout-6>

        <h2>Flexgrid</h2>
        <p>Flexgrid allows you to size a list of flex items to achieve effects similar to a grid. Use breakpoint on each item to size them.</p>
        <sample-flexgrid-1></sample-flexgrid-1>
        <sample-flexgrid-2></sample-flexgrid-2>

        <h2>Flexcolumn</h2>
        <p>Flexcolumn operates in principal like a flexrow except that it's orientation is that of a column rather than a row.</p>
        <sample-flexcolumn-1></sample-flexcolumn-1>
        <sample-flexcolumn-2></sample-flexcolumn-2>

        <h2>Flexlist</h2>
        <p>Use Flexlist to take advantage of ordering and alignment while having a presentation that looks like a list. It should be noted that ordering works on all layout types.</p>
        <sample-flexlist-1></sample-flexlist-1>
        <sample-flexlist-2></sample-flexlist-2>
        <sample-flexlist-3></sample-flexlist-3>
      </section>
    `;
  }
}

window.customElements.define('view-layout', ViewLayout);
