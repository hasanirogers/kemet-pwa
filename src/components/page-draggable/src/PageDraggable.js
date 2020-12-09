import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { identifyPageGroup } from '../../../utilities/identifyPageGroup.js';
import { snippetMarkup, snippetDemo } from './snippets.js';

import '@kemet/kemet-draggable/kemet-draggable.js';
import '../../kemet-btn/kemet-btn.js';

export class PageDraggable extends LitElement {
  static get styles() {
    return [
      stylesBase,
      stylesRSCSS,
      css`
        :host {
          display: block;
        }

        #demo {
          width: 360px;
          height: 72px;
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
      <link href="https://unpkg.com/@kemet/kemet-styles@latest/dist/kemet.components.css" rel="stylesheet" type="text/css">
      <link href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/styles/vs2015.min.css" rel="stylesheet" type="text/css"/>
      <article>
        <h1>Draggable</h1>
        <section>
          <h2>Installation</h2>
          <p><code>npm install @kemet/kemet-draggable --save</code></p>
          <p>Once installed, you can run <code>npm start</code> to demo locally or <code>npm run storybook</code> for local docs.</p>

          <br><hr><br>

          <h2>Usage</h2>
          <pre><code class="javascript">import '@kemet/kemet-draggable/kemet-draggable.js';</code></pre>
          <h3>Markup</h3>
          <pre><code class="html">${snippetMarkup}</code></pre>

          <br><hr><br>

          <h2>Demo</h2>
          <p>
            <kemet-draggable measure memory="kemet-draggable-demo">
              <kemet-btn id="demo">
                  Drag me and I'll remember my position!
              </kemet-btn>
            </kemet-draggable>
          </p>
          <pre><code>${snippetDemo}</code></pre>

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
                  <td>memory</td>
                  <td>A unique identifier used to store the element's position in local storage.<div><em>String</em></div></td>
                  <td>null</td>
                </tr>
                <tr>
                  <td>top</td>
                  <td>The elements top position in pixels.<div><em>String</em></div></td>
                  <td>auto</td>
                </tr>
                <tr>
                  <td>left</td>
                  <td>The elements left position in pixels.<div><em>String</em></div></td>
                  <td>auto</td>
                </tr>
                <tr>
                  <td>measure</td>
                  <td>If set to true, will measure the width and height of the element's content and apply it to the host element.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td colspan="3"><b>events</b></td>
                </tr>
                <tr>
                  <td>kemet-draggable-start</td>
                  <td colspan="2">Fires when the user starts dragging the element.</td>
                </tr>
                <tr>
                  <td>kemet-draggable-stop</td>
                  <td colspan="2">Fires when the user stops dragging the element.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>
      </article>
    `;
  }
}
