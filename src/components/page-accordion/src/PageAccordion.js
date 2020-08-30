import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { versions } from '../../kemet-pwa/src/versions.js';

import {
  snippetMarkup
} from './snippets.js';

import '@kemet/kemet-accordion/kemet-accordion.js';

export class PageAccordion extends LitElement {
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
  }

  render() {
    return html`
      <link href="https://unpkg.com/@kemet/kemet-styles@latest/dist/kemet.components.css" rel="stylesheet" type="text/css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${versions.highlightjs}/styles/vs2015.min.css" rel="stylesheet" type="text/css"/>
      <article>
        <h1>Accordion</h1>
        <section>
          <h2>Installation</h2>
          <p><code>npm install @kemet/kemet-accordion --save</code></p>
          <p>Once installed, you can run <code>npm start</code> to demo locally or <code>npm run storybook</code> for local docs.</p>

          <br><hr><br>

          <h2>Usage</h2>
          <pre><code class="javascript">import '@kemet/kemet-accordion/kemet-accordion.js';</code></pre>
          <h3>Markup</h3>
          <pre><code>${snippetMarkup}</code></pre>

          <br><hr><br>

          <h2>Demo</h2>
          <p>Keep in mind that Kemet is a designless system. However <a href="https://github.com/hasanirogers/kemet-styles/blob/master/src/scss/components/accordion.scss" target="_blank">styles were created for this demo</a>. Feel free to use the styles but we encouage you to style it to your specs.</p>
          <kemet-accordion>
            <div slot="trigger">
              <span>Accordion One</span>
              <span class="plus"></span>
              <span class="minus"></span>
            </div>
            <div slot="panel">Bacon ipsum dolor amet shoulder sausage short ribs, fatback ground round biltong drumstick spare ribs bacon tenderloin burgdoggen turducken picanha beef ribs pork belly.</div>
          </kemet-accordion>
          <kemet-accordion>
            <div slot="trigger">
              <span>Accordion Two</span>
              <span class="plus"></span>
              <span class="minus"></span>
            </div>
            <div slot="panel">Bacon ipsum dolor amet shoulder sausage short ribs, fatback ground round biltong drumstick spare ribs bacon tenderloin burgdoggen turducken picanha beef ribs pork belly.</div>
          </kemet-accordion>

          <br>

          <h2>API</h2>
          <h3>&lt;kemet-accordion&gt;</h3>
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
                  <td>opened</td>
                  <td>Determines whether or not the accordion is opened.<div><em>Boolean</em></div></td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="3"><b>methods</b></td>
                </tr>
                <tr>
                  <td>toggle</td>
                  <td colspan="2">Toggles the accordion opened and closed.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>slots</b></td>
                </tr>
                <tr>
                  <td>trigger</td>
                  <td colspan="2">A link that toggles the accordion.</td>
                </tr>
                <tr>
                  <td>panel</td>
                  <td colspan="2">The content for the accordion.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </article>
    `;
  }
}
