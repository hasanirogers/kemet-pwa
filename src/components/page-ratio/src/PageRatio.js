import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { identifyPageGroup } from '../../../utilities/identifyPageGroup.js';
import {
  snippetMarkup
} from './snippets.js';

import '@kemet/kemet-ratio/kemet-ratio';

export class PageRatio extends LitElement {
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
        <h1>Ratio</h1>
        <section>
          <h2>Installation</h2>
          <p><code>npm install @kemet/kemet-ratio --save</code></p>
          <p>Once installed, you can run <code>npm start</code> to demo locally or <code>npm run storybook</code> for local docs.</p>

          <br><hr><br>

          <h2>Usage</h2>
          <pre><code class="javascript">import '@kemet/kemet-ratio/kemet-ratio.js';</code></pre>
          <h3>Markup</h3>
          <pre><code>${snippetMarkup}</code></pre>

          <br><hr><br>

          <h2>Demo</h2>
          <p>This component can contain any content but is especially useful for embeds like iFrames. Be sure to apply 100% width and height if you're using an embed.</p>
          <kemet-ratio>
            <iframe width="100%" height="100%" title="Kemet Templates" src="https://stackblitz.com/edit/kemet-templates?embed=1&file=index.html"></iframe>
          </kemet-ratio>

          <br><hr><br>

          <h2>API</h2>
          <h3>&lt;kemet-ratio&gt;</h3>
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
                  <td>aspectRatio</td>
                  <td>The aspect ratio of the box.<div><em>String</em></div></td>
                  <td>16:9</td>
                </tr>
                <tr>
                  <td colspan="3"><b>css</b></td>
                </tr>
                <tr>
                  <td>::part(container)</td>
                  <td colspan="2">Contains your content.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </article>
    `;
  }
}
