import { html, css, LitElement } from 'lit-element';
import { stylesBase } from '../../../assets/styles.js';
import { versions } from '../../kemet-pwa/src/versions.js';
import { identifyPageGroup } from '../../../utilities/identifyPageGroup.js';

import {
  sampleFlexlayout1,
  sampleFlexlayout2,
  sampleFlexlayout3,
  sampleFlexlayout4,
  sampleFlexlayout5,
  sampleFlexlayout6,
  sampleFlexgrid1,
  sampleFlexgrid2,
  sampleFlexcolumn1,
  sampleFlexcolumn2,
  sampleFlexlist1,
  sampleFlexlist2,
  sampleFlexlist3,
} from './templateSamples.js'

export class PageLayout extends LitElement {
  static get styles() {
    return [
      stylesBase,
      css`
        :host {
          display: block;
        }
    `
    ];
  }

  firstUpdated() {
    this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
      window.hljs.highlightBlock(block);
    });

    identifyPageGroup('styles');
  }

  render() {
    return html`
      <link href="https://unpkg.com/@kemet/kemet-styles@latest/dist/kemet.layout.css" rel="stylesheet" type="text/css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${versions.highlightjs}/styles/vs2015.min.css" rel="stylesheet" type="text/css"/>
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
              <pre><code>${sampleFlexlayout3}</code></pre>
          </figure>

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
            <pre><code>${sampleFlexlayout4}</code></pre>
          </figure>

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
            <pre><code>${sampleFlexlayout5}</code></pre>
          </figure>

          <figure>
            <figcaption>
              <p>You can align acrosss the x-axis with <code>cross-align</code>. Cross align can only be used on a container and effects all items. Values include <code>left</code>, <code>right</code>, <code>center</code>, <code>between</code>, and <code>around</code>.</p>
            </figcaption>
            <div layout="flexrow" cross-align="between">
                <div breakpoint="tiny-66"><span class="box">Left</span></div>
                <div breakpoint="tiny-content"><span class="box">Right</span></div>
            </div>
            <pre><code>${sampleFlexlayout6}</code></pre>
          </figure>

          <br />

          <h2>Flexgrid</h2>
          <p>Flexgrid allows you to size a list of flex items to achieve effects similar to a grid. Use breakpoint on each item to size them.</p>

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
            <pre><code>${sampleFlexgrid1}</code></pre>
          </figure>

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
            <pre><code>${sampleFlexgrid2}</code></pre>
          </figure>

          <br />

          <h2>Flexcolumn</h2>
          <p>Flexcolumn operates in principal like a flexrow except that it's orientation is that of a column rather than a row.</p>

          <figure>
            <figcaption>
              <p>A <code>flexcolumn</code> will automatically space each item's height in its container.</p>
            </figcaption>
            <div layout="flexcolumn" gutters style="height:300px;">
              <div><span class="box">1</span></div>
              <div><span class="box">2</span></div>
              <div><span class="box">3</span></div>
            </div>
            <pre><code>${sampleFlexcolumn1}</code></pre>
          </figure>

          <figure>
            <figcaption>
              <p>Use <code>size-content</code> on an item to size its height the content of the item.</p>
            </figcaption>
            <div layout="flexcolumn" gutters style="height:300px;">
              <div size-content><span class="box">1</span></div>
              <div><span class="box">2</span></div>
              <div><span class="box">3</span></div>
            </div>
            <pre><code>${sampleFlexcolumn2}</code></pre>
          </figure>

          <br />

          <h2>Flexlist</h2>
          <p>Use Flexlist to take advantage of ordering and alignment while having a presentation that looks like a list. It should be noted that ordering works on all layout types.</p>

          <figure>
            <figcaption>
              <p>Use a flexlist to take advantage of ordering and alignment while having a presentation that looks like a list.</p>
            </figcaption>
            <div layout="flexlist" gutters>
              <div><span class="box">One</span></div>
              <div><span class="box">Two</span></div>
              <div><span class="box">Three</span></div>
              <div><span class="box">Four</span></div>
              <div><span class="box">Five</span></div>
              <div><span class="box">Six</span></div>
            </div>
            <pre><code>${sampleFlexlist1}</code></pre>
          </figure>

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
            <pre><code>${sampleFlexlist2}</code></pre>
          </figure>

          <figure>
            <figcaption>
              <p>You can also de-prioritize elements at a breakpoint using the order attribute.</p>
            </figcaption>
            <div layout="flexlist" gutters>
              <div><span class="box">One</span></div>
              <div><span class="box">Two</span></div>
              <div><span class="box">Three</span></div>
              <div order="medium-plus-1"><span class="box" style="background:darkgoldenrod;">Four</span></div>
              <div order="medium-plus-1"><span class="box" style="background:darkgoldenrod;">Five</span></div>
              <div><span class="box">Six</span></div>
            </div>
            <pre><code>${sampleFlexlist3}</code></pre>
          </figure>
        </section>
      </article>
    `;
  }
}
