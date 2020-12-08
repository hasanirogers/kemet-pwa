import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { versions } from '../../kemet-pwa/src/versions.js';
import { identifyPageGroup } from '../../../utilities/identifyPageGroup.js';
import { snippetMarkup, snippetJS } from './snippets.js';

import '@kemet/kemet-scroll-link/kemet-scroll-link';
import '../../kemet-btn/kemet-btn.js';

export class PageScrollLink extends LitElement {
  static get styles() {
    return [
      stylesBase,
      stylesRSCSS,
      css`
        :host {
          display: block;
        }

        .extra-space {
          min-height: 100vh;
        }
    `
    ];
  }

  firstUpdated() {
    const demoLink = this.shadowRoot.querySelector('kemet-scroll-link');
    demoLink.target = this.shadowRoot.getElementById('demo');

    this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
      window.hljs.highlightBlock(block);
    });

    identifyPageGroup('components');
  }

  render() {
    return html`
      <link href="https://unpkg.com/@kemet/kemet-styles@latest/dist/kemet.components.css" rel="stylesheet" type="text/css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${versions.highlightjs}/styles/vs2015.min.css" rel="stylesheet" type="text/css"/>
      <article>
        <h1>Scroll Link</h1>
        <section>
          <h2>Installation</h2>
          <p><code>npm install @kemet/kemet-scroll-link --save</code></p>
          <p>Once installed, you can run <code>npm start</code> to demo locally or <code>npm run storybook</code> for local docs.</p>

          <br><hr><br>

          <h2>Usage</h2>
          <pre><code class="javascript">import '@kemet/kemet-scroll-link/kemet-scroll-link.js';</code></pre>
          <h3>Markup</h3>
          <pre><code class="html">${snippetMarkup}</code></pre>
          <h3>Javascript</h3>
          <pre><code class="javascript">${snippetJS}</code></pre>

          <br><hr><br>

          <h2 id="demo">Demo</h2>
          <p class="extra-space">Scroll down and click the button to scroll back up.</p>
          <p>
            <kemet-scroll-link>
              <kemet-btn>
                Scroll back to Demo heading.
              </kemet-btn>
            </kemet-scroll-link>
          </p>

          <br><hr><br>

          <h2>API</h2>
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
                  <td>element</td>
                  <td>A DOM element that establishes the context of scrolling.<div><em>Object</em></div></td>
                  <td>window</td>
                </tr>
                <tr>
                  <td>target</td>
                  <td>A DOM element that represents the destination of the scroll link.<div><em>Object</em></div></td>
                  <td>body</td>
                </tr>
                <tr>
                  <td>xOffset</td>
                  <td>Allows the horizontal scrolling to stop short of the given value.<div><em>Number</em></div></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>yOffset</td>
                  <td>Allows the vertical scrolling to stop short of the given value.<div><em>Number</em></div></td>
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
