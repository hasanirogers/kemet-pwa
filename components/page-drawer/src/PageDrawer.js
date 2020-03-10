import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { versions } from '../../kemet-pwa/src/versions.js';

import { snippetMarkup, snippetJS } from './snippets.js';

export class PageDrawer extends LitElement {
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
    this.drawer = document.querySelector('kemet-pwa').shadowRoot.querySelector('kemet-drawer');

    this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }

  render() {
    return html`
      <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${versions.highlightjs}/styles/vs2015.min.css" rel="stylesheet" type="text/css"/>
      <article>
        <h1>Drawer</h1>
        <section>
          <h2>Installation</h2>
          <p><code>npm install @kemet/kemet-drawer --save</code></p>
          <p>Once installed, you can run <code>npm start</code> to demo locally or <code>npm run storybook</code> for local docs.</p>

          <br><hr><br>

          <h2>Demo</h2>
          <p>Select an effect then click the button below.</p>
          <p>
            <div class="select-box">
              <select class="select" @change=${(event) => this.updateEffect(event)}>
                <option value="slide">Slide</option>
                <option value="reveal">Reveal</option>
                <option value="push">Push</option>
                <option value="scale" selected>Scale</option>
                <option value="door">Door</option>
              </select>
            </div>
          </p>
          <p><a class="standard-btn" @click=${this.openDrawer}>Open The Drawer</a></p>

          <br><hr><br>

          <h2>Usage</h2>
          <h3>Markup</h3>
          <pre><code class="html">${snippetMarkup}</code></pre>
          <h3>Javascript</h3>
          <pre><code class="javascript">${snippetJS}</code></pre>

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
                  <td>effect</td>
                  <td>The animation effect for opening and closing the drawer. Values include: (slide|reveal|push|scale|door)<div><em>String</em></div></td>
                  <td>slide</td>
                </tr>
                <tr>
                  <td>opened</td>
                  <td>Determines if the drawer is opened or not.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td colspan="3"><b>slots</b></td>
                </tr>
                <tr>
                  <td>navigation</td>
                  <td colspan="2">The off canvas navigation.</td>
                </tr>
                <tr>
                  <td>content</td>
                  <td colspan="2">The main page content area.</td>
                </tr>

                <tr>
                  <td colspan="3"><b>methods</b></td>
                </tr>
                <tr>
                  <td>open</td>
                  <td colspan="2">Opens the drawer.</td>
                </tr>
                <tr>
                  <td>close</td>
                  <td colspan="2">Closes the drawer.</td>
                </tr>
                <tr>
                  <td>toggle</td>
                  <td colspan="2">Toggles the drawer.</td>
                </tr>



                <tr>
                  <td colspan="3"><b>css</b></td>
                </tr>
                <tr>
                  <td>--kemet-drawer-width</td>
                  <td>The width of the drawer.</td>
                  <td>300px</td>
                </tr>
                <tr>
                  <td>--kemet-drawer-height</td>
                  <td>The height of the drawer.</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>--kemet-drawer-color</td>
                  <td>The text color of the drawer.</td>
                  <td>#fafafa</td>
                </tr>
                <tr>
                  <td>--kemet-drawer-background</td>
                  <td>The background color of the drawer.</td>
                  <td>#202020</td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>
      </article>
    `;
  }

  openDrawer() {
    this.drawer.open();
  }

  updateEffect(event) {
    this.drawer.effect = event.target.value;
  }
}
