/* eslint-disable class-methods-use-this */
import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { identifyPageGroup } from '../../../utilities/identifyPageGroup.js';

import {
  snippetImport,
  snippetMarkup,
  snippetJS
} from './snippets.js';

import '../../kemet-btn/kemet-btn.js';

import '@kemet/kemet-modal/kemet-modal.js';
import '@kemet/kemet-modal/kemet-modal-close.js';

export class PageModal extends LitElement {
  static get properties() {
    return {
      blurContent: {
        type: Boolean,
      },
      scaleContent: {
        type: Boolean,
      }
    }
  }

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
      `
    ];
  }

  constructor() {
    super();

    this.blurContent = false;
    this.scaleContent = false;
  }

  firstUpdated() {
    this.drawer = document.querySelector('kemet-pwa').shadowRoot.querySelector('kemet-drawer');
    this.nav = document.querySelector('kemet-pwa').shadowRoot.querySelector('kemet-nav[content]');


    this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
      window.hljs.highlightBlock(block);
    });

    this.handleContentOnOpen();
    this.handleContentOnClose();

    identifyPageGroup('components');
  }

  render() {
    return html`
      <link href="https://unpkg.com/@kemet/kemet-styles@latest/dist/kemet.components.css" rel="stylesheet" type="text/css">
      <link href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/styles/vs2015.min.css" rel="stylesheet" type="text/css"/>
      <article class="${this.blurContent ? '-blur' : ''} ${this.scaleContent ? '-scale' : ''}">
        <h1>Modal</h1>
        <section>
          <h2>Installation</h2>
          <p><code>npm install @kemet/kemet-modal --save</code></p>
          <p>Once installed, you can run <code>npm start</code> to demo locally or <code>npm run storybook</code> for local docs.</p>

          <br><hr><br>

          <h2>Usage</h2>
          <pre><code class="javascript">${snippetImport}</code></pre>
          <h3>Markup</h3>
          <pre><code>${snippetMarkup}</code></pre>
          <h3>JS</h3>
          <pre><code>${snippetJS}</code></pre>
          <p><strong>Note:</strong> you can also open a modal by toggling it's <code>opened</code> property. If you show the modal by property an event will never fire letting the rest of your app know a modal has opened or closed however.</p>

          <br><hr><br>

          <h2>Demo</h2>
          <p>Keep in mind that Kemet is a designless system. However <a href="https://github.com/hasanirogers/kemet-styles/blob/master/src/scss/components/modal.scss" target="_blank">styles were created for this demo</a>. Feel free to use the styles but we encouage you to style it to your specs.</p>

          <br>

          <h3>Modal Effects</h3>
          <p>Select an effect then click the button below.</p>
          <div>
            <div class="select-box">
              <select class="select" @change=${(event) => this.updateModalEffect(event)}>
                <option value="fadein-scaleup">Fade-In Scale-Up</option>
                <option value="slide-right">Slide Right</option>
                <option value="slide-bottom">Slide-Bottom</option>
                <option value="newspaper">Newspaper</option>
                <option value="fall">Fall</option>
                <option value="side-fall">Side Fall</option>
                <option value="flip-horizontal">Flip Horizontal</option>
                <option value="flip-vertical">Flip Vertical</option>
                <option value="sign-3d">Sign 3D</option>
                <option value="super-scaled" selected>Super Scaled</option>
                <option value="slit">Slit</option>
                <option value="rotate-bottom">Rotate Bottom</option>
                <option value="rotate-left">Rotate Left</option>
              </select>
            </div>
          </div>
          <p><kemet-btn @click=${() => this.openModal('has-effect')}>Open Modal</kemet-btn></p>

          <h3>Content Effects</h3>
          <p>Your content is your own. Our modal component can't control effects on your content because you structure it as you please. However you can tap into the <code>kemet-modal-open</code> and <code>kemet-modal-close</code> events to add effects to your own content. The following demostrates an approach to doing this.</p>
          <p>
            <label>
              <input type="checkbox" name="blur" />
              Blur the content when the modal opens.
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="scale" />
              Scale the content when the modal opens.
            </label>
          </p>
          <p><kemet-btn @click=${() => this.openModal('no-effect')}>Open Modal</kemet-btn></p>
          <p>The implementation for adding effects to content depends on your app. Check out <a href="https://github.com/hasanirogers/kemet-modal/blob/master/demo/index.html" target="_blank">our demo</a> for some ideas.</p>

          <br>

          <h3>No Close Button</h3>
          <p>The element <code>kemet-modal-close</code> is optional. You can also add an <code>closeOnClick</code> property to the modal. This will allow the user to close the modal if they click outside the modal.</p>
          <p><kemet-btn @click=${() => this.openModal('no-close-btn')}>Open Modal With No Button</kemet-btn></p>

          <br>

          <h3>A Word About Document Placment</h3>
          <p>We recommend that you place your modal as a child of your app element or as a child of the body element. The reason for this is that the modal uses fixed positioning to fix to the window. However there are various CSS quirks such as using <code>transform</code> or <code>perspective</code> on a parent element that will break this fixed window style if the modal is a child of an element using this properties. To avoid this, your modal shouldn't be too far nested in your app.</p>

          <br><hr><br>

          <h2>API</h2>
          <h3>&lt;kemet-modal&gt;</h3>
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
                  <td>Determines whether or not the modal is opened.<div><em>Boolean</em></div></td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>effect</td>
                  <td>The opening and closing style of the modal. Possible effects include: (fadein-scaleup | slide-right | slide-bottom | newspaper | fall | side-fall | flip-horizontal | flip-vertical | sign-3d | super-scaled | slit | rotate-bottom | rotate-left)<div><em>String</em></div></td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>closeOnClick</td>
                  <td>Allows the user to control if clicking the overlay closes the modal.<div><em>Boolean</em></div></td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="3"><b>methods</b></td>
                </tr>
                <tr>
                  <td>open</td>
                  <td colspan="2">Opens the modal.</td>
                </tr>
                <tr>
                  <td>close</td>
                  <td colspan="2">Closes the modal.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>events</b></td>
                </tr>
                <tr>
                  <td>kemet-modal-open</td>
                  <td colspan="2">Fires when a modal opens.</td>
                </tr>
                <tr>
                  <td>kemet-modal-close</td>
                  <td colspan="2">Fires when a modal closes.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>css</b></td>
                </tr>
                <tr>
                  <td>--kemet-modal-min-width</td>
                  <td>Minimum width of the modal contents.</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>--kemet-modal-max-width</td>
                  <td>Maxiumum with of the modal contents.</td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>--kemet-modal-overlay-bgcolor</td>
                  <td>The color of the modal's overlay.</td>
                  <td>rgba(0,0,0,0.2)</td>
                </tr>
                <tr>
                  <td>--kemet-modal-transition-speed</td>
                  <td>Speed for revealing the modal.</td>
                  <td>0.3s</td>
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
