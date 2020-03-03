import { html, css, LitElement } from 'lit-element';
// import * as hljs from 'highlight.js';
import { stylesBase } from '../../../assets/styles.js';

import {
  sampleFlexlayout1,
  sampleFlexlayout2
} from './templateSamples.js'

export class PageLayout extends LitElement {
  static get styles() {
    return [
      stylesBase,
      css`
        :host {
          display: block;
        }

        article {
          padding: 2rem;
        }

        @media screen and (min-width: 768px) {
          :host {
            margin-left: var(--app-drawer-width);
          }
        }
    `
    ];
  }

  firstUpdated() {
    this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }

  render() {
    return html`
      <link href="https://unpkg.com/@kemet/kemet-styles@1.3.1/dist/kemet.layout.css" rel="stylesheet" type="text/css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/vs2015.min.css" rel="stylesheet" type="text/css"/>
      <article>
        <h1>Layout</h1>
        <section>
          <h2>Flexrow</h2>
          <p>Flexrow allows you to layout items in row (a flexbox line). Add as many items to the row as you like and sizing is largely automated.</p>
          <figure>
            <figcaption>
              <p>This is most basic usage of flexrow. Every direct descendent of flexrow will equally distribute space.</p>
            </figcaption>
            <div layout="flexrow">
                <div><span class="box">Item 1</span></div>
                <div><span class="box">Item 2</span></div>
                <div><span class="box">Item 3</span></div>
                <div><span class="box">Item 4</span></div>
            </div>
            <pre><code>${sampleFlexlayout1}</code></pre>
          </figure>

          <figure>
            <figcaption>
              <p>Add <code>autostack</code> to flexrow to force the items to stack to a mobile layout at the <code>$stackpoint</code> variable. Add <code>gutters</code> to flexrow to put gutter spacing between items.</p>
            </figcaption>
            <div layout="flexrow" autostack gutters>
                <div><span class="box">Item 1</span></div>
                <div><span class="box">Item 2</span></div>
                <div><span class="box">Item 3</span></div>
                <div><span class="box">Item 4</span></div>
            </div>
            <pre><code>${sampleFlexlayout2}</code></pre>
          </figure>


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
      </article>
    `;
  }
}
