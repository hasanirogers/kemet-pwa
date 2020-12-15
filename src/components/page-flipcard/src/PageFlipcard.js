/* eslint-disable class-methods-use-this */
import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { identifyPageGroup } from '../../../utilities/identifyPageGroup.js';

import {
  snippetImport,
  snippetMarkup,
  snippetFixedDimensions,
  snippetMeasuredHeight,
  snippetFlipOnHover,
} from './snippets.js';

import '@kemet/kemet-flipcard/kemet-flipcard';
import '@kemet/kemet-flipcard/kemet-flipcard-trigger';

export class PageFlipcard extends LitElement {
  static get styles() {
    return [
      stylesBase,
      stylesRSCSS,
      css`
        :host {
          display: block;
        }

        article {
          transition: transform 300ms ease;
        }

        img {
          max-width: 100%;
        }

        kemet-flipcard::part(wrapper) {
          border: 1px solid var(--app-primary-color);
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
        <h1>Flipcard</h1>
        <section>
          <h2>Installation</h2>
          <p><code>npm install @kemet/kemet-flipcard --save</code></p>
          <p>Once installed, you can run <code>npm start</code> to demo locally or <code>npm run storybook</code> for local docs.</p>

          <br><hr><br>

          <h2>Usage</h2>
          <pre><code class="javascript">${snippetImport}</code></pre>
          <h3>Markup</h3>
          <pre><code>${snippetMarkup}</code></pre>

          <br><hr><br>

          <h2>Demo</h2>

          <br><h3>Fixed Dimensions</h3>

          <kemet-flipcard style="width:320px; height:240px;">
            <div slot="front">
              <p>This card has a fixed height and width.</p>
              <kemet-flipcard-trigger>
                <button>Flip Me</button>
              </kemet-flipcard-trigger>
            </div>
            <div slot="back">
              <kemet-flipcard-trigger>
                <button>Flip me back!</button>
              </kemet-flipcard-trigger>
            </div>
          </kemet-flipcard>
          <pre><code>${snippetFixedDimensions}</code></pre>

          <br><h3>Measured Height</h3>

          <kemet-flipcard measure>
            <div slot="front">
              <p>This card will automatically adjust its height to match the tallest content.</p>
              <kemet-flipcard-trigger>
                <button>Flip Me</button>
              </kemet-flipcard-trigger>
            </div>
            <kemet-flipcard-trigger slot="back" style="display:flex;">
              <img src="https://placehold.it/1920x1080" alt="a placeholder" />
            </kemet-flipcard-trigger>
          </kemet-flipcard>
          <pre><code>${snippetMeasuredHeight}</code></pre>

          <br><h3>Flip On Hover</h3>

          <kemet-flipcard measure flip-on-hover axis="vertical">
            <div slot="front">
              <p>This card will flip on hover or focus.</p>
            </div>
            <div slot="back">
              <p>It also flips vertically.</p>
            </div>
          </kemet-flipcard>
          <pre><code>${snippetFlipOnHover}</code></pre>

          <br><hr><br>

          <h2>API</h2>
          <h3>&lt;kemet-flipcard&gt;</h3>
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
                  <td>axis</td>
                  <td>The direction the card flips in. Values include: (horizontal | vertical)<div><em>String</em></div></td>
                  <td>horizontal</td>
                </tr>
                <tr>
                  <td>flipped</td>
                  <td>Determines whether or not to show the front or back of the card.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>flipOnHover</td>
                  <td>If true, the card flips on hover and focus.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>measure</td>
                  <td>If true, the card will determine the tallest side and apply it's height to the host.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td colspan="3"><b>slots</b></td>
                </tr>
                <tr>
                  <td>front</td>
                  <td colspan="2">The front of the card.</td>
                </tr>
                <tr>
                  <td>back</td>
                  <td colspan="2">The back of the card.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>css</b></td>
                </tr>
                <tr>
                  <td>--kemet-flipcard-front-background</td>
                  <td>The background color for the front of the card.</td>
                  <td>#fafafa</td>
                </tr>
                <tr>
                  <td>--kemet-flipcard-back-background</td>
                  <td>The background color for the back of the card.</td>
                  <td>#fafafa</td>
                </tr>
                <tr>
                  <td>::part(front)</td>
                  <td>The front of the card.</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>::part(back)</td>
                  <td>The back of the card.</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>::part(wrapper)</td>
                  <td>A container for both front and back of the card.</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>&lt;kemet-flipcard-trigger&gt;</h3>
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
                  <td colspan="3"><b>events</b></td>
                </tr>
                <tr>
                  <td>kemet-flipcard-flipped</td>
                  <td colspan="2">Fires when clicked or when entered key is pressed for a flipped event.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </article>
    `;
  }

  openModal(id) {
    const modal = document.querySelector('kemet-pwa').shadowRoot.getElementById(id);
    modal.open();
  }

  updateModalEffect(event) {
    const modal = document.querySelector('kemet-pwa').shadowRoot.querySelector('kemet-modal[effect]');
    modal.effect = event.target.value;
  }

  handleContentOnOpen() {
    document.addEventListener('kemet-modal-open', () => {
      const blurCheckbox = this.shadowRoot.querySelector('[name="blur"]');
      const scaleCheckbox = this.shadowRoot.querySelector('[name="scale"]');

      if (blurCheckbox.checked) {
        this.blurContent = true;
        this.nav.blurContent = true;
      }

      if (scaleCheckbox.checked) {
        this.scaleContent = true;
        this.nav.scaleContent = true;
      }
    });
  }

  handleContentOnClose() {
    document.addEventListener('kemet-modal-close', () => {
      this.blurContent = false;
      this.scaleContent = false;

      this.nav.blurContent = false;
      this.nav.scaleContent = false;
    });
  }

  openDrawer() {
    this.drawer.open();
  }

  updateEffect(event) {
    this.drawer.effect = event.target.value;
  }
}
