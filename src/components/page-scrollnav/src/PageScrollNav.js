import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { identifyPageGroup } from '../../../utilities/identifyPageGroup.js';
import {
  snippetMarkup
} from './snippets.js';

import '@kemet/kemet-scroll-nav/kemet-scroll-nav';

export class PageScrollNav extends LitElement {
  static get styles() {
    return [
      stylesBase,
      stylesRSCSS,
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

    identifyPageGroup('components');
  }

  render() {
    return html`
      <link href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/styles/vs2015.min.css" rel="stylesheet" type="text/css"/>
      <article>
        <h1>Scroll Nav</h1>
        <section>
          <h2>Installation</h2>
          <p><code>npm install @kemet/kemet-scroll-nav --save</code></p>
          <p>Once installed, you can run <code>npm start</code> to demo locally or <code>npm run storybook</code> for local docs.</p>

          <br><hr><br>

          <h2>Usage</h2>
          <pre><code class="javascript">import '@kemet/kemet-scroll-nav/kemet-scroll-nav.js';</code></pre>
          <h3>Markup</h3>
          <pre><code>${snippetMarkup}</code></pre>

          <br><hr><br>

          <h2>Demo</h2>
          <p><a href="https://stackblitz.com/edit/kemet-scroll-nav" target="_blank">Click here to view the demo on Stackblitz</a>.</p>

          <br><hr><br>

          <h2>API</h2>
          <h3>&lt;kemet-scroll-nav&gt;</h3>
          <div class="_responsivetable">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="3"><b>properties</b></td>
                </tr>
                <tr>
                  <td>effect</td>
                  <td>Determines where the transform point is activated. Values include: (sticky | resize)<div><em>String</em></div></td>
                  <td>sticky</td>
                </tr>
                <tr>
                  <td>transform</td>
                  <td>Whether or not the nav has shifted into a new state.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>offset</td>
                  <td>Allows for an arbitrary adjustment of the transform point in pixels. Works with negative values.<div><em>Number</em></div></td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </article>
    `;
  }
}
