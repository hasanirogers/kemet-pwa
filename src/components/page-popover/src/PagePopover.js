import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { identifyPageGroup } from '../../../utilities/identifyPageGroup.js';
import {
  snippetMarkup,
  snippetPopover,
  snippetTooltip,
  snippetCustomTooltip,
} from './snippets.js';

import '@kemet/kemet-popover/kemet-popover';
import '../../kemet-radio/kemet-radio.js';

export class PagePopover extends LitElement {
  static get styles() {
    return [
      stylesBase,
      stylesRSCSS,
      css`
        :host {
          display: block;
        }

        .select-box {
          display: inline-block;
          min-width: 75%;
        }

        .property-select {
          display: grid;
          gap: 2rem;
          grid-template-columns: 1fr 1fr;
        }

        .popovers {
          display: flex;
          margin-top: 4rem;
          justify-content: space-around;
        }

        .popovers > div {
          text-align: center;
        }

        .code-display {
          margin-top: 2rem;
        }

        .code-display > * {
          display: none;
        }

        .code-display > .show {
          display: block;
        }

        kemet-popover {
          display: block;
        }

        [tooltip] {
          --kemet-popover-gap: 1rem;
        }

        [custom-tooltip] {
          --kemet-popover-gap: 1rem;
        }

        [custom-tooltip] [slot="content"] {
          color: rgba(36,49,56,1);
          background-color: #fafafa;
          border: 3px solid rgba(36,49,56,1);
        }

        [custom-tooltip][position="top"] svg,
        [custom-tooltip][position="bottom"] svg,
        [custom-tooltip][position="left"] svg,
        [custom-tooltip][position="right"] svg {
          position: relative;
        }

        [custom-tooltip][position="top"] svg {
          top: -3px;
        }

        [custom-tooltip][position="right"] svg {
          right: -10px;
          transform: rotate(90deg);
        }

        [custom-tooltip][position="bottom"] svg {
          top: 3px;
          transform: rotate(180deg);
        }

        [custom-tooltip][position="left"] svg {
          transform: rotate(270deg);
          right: 10px;
        }

        @media only screen and (min-width: 640px) {
          kemet-popover {
            --kemet-popover-width: 200%;
          }
        }
    `
    ];
  }

  static get properties() {
    return {
      codeDisplay: {
        type: String
      }
    }
  }

  firstUpdated() {
    this.popovers = this.shadowRoot.querySelectorAll('kemet-popover');

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
        <h1>Popover</h1>
        <section>
          <h2>Installation</h2>
          <p><code>npm install @kemet/kemet-popover --save</code></p>
          <p>Once installed, you can run <code>npm start</code> to demo locally or <code>npm run storybook</code> for local docs.</p>

          <br><hr><br>

          <h2>Usage</h2>
          <pre><code class="javascript">import '@kemet/kemet-popover/kemet-popover.js';</code></pre>
          <h3>Markup</h3>
          <pre><code class="html">${snippetMarkup}</code></pre>

          <br><hr><br>

          <h2>Demo</h2>
          <p>Select an effect, position, and fire on event. This will configure how all demo popovers behave. Then hover or click the "activate" trigger.</p>
          <form>
            <div class="property-select">
              <label>
                Effect:&nbsp;&nbsp;
                <div class="select-box">
                  <select class="select" @change=${(event) => this.updateEffect(event)}>
                    <option value="none" selected>None</option>
                    <option value="fade">Fade</option>
                    <option value="scale">Scale</option>
                    <option value="slide">Slide</option>
                    <option value="fall">Fall</option>
                    <option value="flip-horizontal">Flip Horizontal</option>
                    <option value="flip-vertical">Flip Vertical</option>
                    <option value="sign">Sign</option>
                    <option value="super-scaled">Super Scaled</option>
                  </select>
                </div>
              </label>
              <label>
                Position:&nbsp;&nbsp;
                <div class="select-box">
                  <select class="select" @change=${(event) => this.updatePosition(event)}>
                    <option value="top" selected>Top</option>
                    <option value="right">Right</option>
                    <option value="bottom">Bottom</option>
                    <option value="left">Left</option>
                  </select>
                </div>
              </label>
            </div>
            <p>
              Fire On:&nbsp;&nbsp;
              <kemet-radio name="fire-on-click" value="click" @change=${(event) => this.handleFireOn(event)}>
                Click
              </kemet-radio>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <kemet-radio name="fire-on-hover" value="hover" @change=${(event) => this.handleFireOn(event)} checked>
                Hover
            </kemet-radio>
            </p>
            <section class="popovers">
              <div>
                <kemet-popover>
                  <strong slot="trigger">Activate Popover</strong>
                  <span slot="content">This is a popover. Lets add some extra text in here and see what happens.</span>
                </kemet-popover>
                <a @click=${() => this.codeDisplay = 'popover'}>Show Code</a>
              </div>
              <div>
                <kemet-popover tooltip>
                  <strong slot="trigger">Activate Tooltip</strong>
                  <span slot="content">This is a tooltip. Lets add some extra text in here and see what happens.</span>
                </kemet-popover>
                <a @click=${() => this.codeDisplay = 'tooltip'}>Show Code</a>
              </div>
              <div>
              <kemet-popover custom-tooltip>
                <strong slot="trigger">Activate Custom Tooltip</strong>:
                <span slot="content">This is a custom tooltip. Here's a <a href="http://kemet.online" target="_blank">random link</a> to help test it out.</span>
                <span slot="custom-tooltip">
                  <svg width="32" height="18" viewBox="0 0 1366.99 767.67">
                    <polyline points="0.74 0.67 685.25 766.17 1366.24 0.67" style="fill:#fafafa; stroke:rgba(36,49,56,1); stroke-width:100px"/>
                  </svg>
                </span>
              </kemet-popover>
              <a @click=${() => this.codeDisplay = 'custom-tooltip'}>Show Code</a>
              </div>
            </section>
            <section class="code-display">
              <pre class="${this.codeDisplay === 'popover' ? 'show' : ''}"><code>${snippetPopover}</code></pre>
              <pre class="${this.codeDisplay === 'tooltip' ? 'show' : ''}"><code>${snippetTooltip}</code></pre>
              <pre class="${this.codeDisplay === 'custom-tooltip' ? 'show' : ''}"><code>${snippetCustomTooltip}</code></pre>
            </section>
            <p><strong>A note about styles:</strong> Remember to add a <code>--kemet-popover-gap</code> if you're using <code>tooltip</code> as the gap's default is 0px. Also, you are responsible for transforming the position and rotation of your custom tooltip. Kemet is designless and makes no assumptions about how you want your custom tooltip to appear. Design as you please.</p>
          </form>

          <br><hr><br>

          <h2>API</h2>
          <h3>&lt;kemet-popover&gt;</h3>
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
                  <td>Determines whether or not the popover displays.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>effect</td>
                  <td>The opening and closing effect of the popover. Is optional. Values include: (fade | scale | slide | fall | flip horizontal | flip vertical | sign | super scaled)<div><em>String</em></div></td>
                  <td>null</td>
                </tr>
                <tr>
                  <td>position</td>
                  <td>Determines the placement of the popover. Values include: (top | right | bottom | left)<div><em>String</em></div></td>
                  <td>top</td>
                </tr>
                <tr>
                  <td>tooltip</td>
                  <td>Adds a build in tooltip to the popover.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>customTooltip</td>
                  <td>Adds a custom tooltip to the popover. Use the custom-tooltip slot to specify the custom tooltip.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>fireOnClick</td>
                  <td>Controls whether or not the tooltip triggers on click.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>fireOnHover</td>
                  <td>Controls whether or not the tooltip triggers on hover.<div><em>Boolean</em></div></td>
                  <td>true</td>
                </tr>
                <tr>
                  <td colspan="3"><b>slots</b></td>
                </tr>
                <tr>
                  <td>trigger</td>
                  <td colspan="2">Controls opening and closing the popover.</td>
                </tr>
                <tr>
                  <td>content</td>
                  <td colspan="2">The contents of the popover.</td>
                </tr>
                <tr>
                  <td>custom-tooltip</td>
                  <td colspan="2">Allows you to use an svg, image, custom css, etc for a custom tooltip.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>events</b></td>
                </tr>
                <tr>
                  <td>kemet-popover-opened</td>
                  <td colspan="2">Fires when the popover opens.</td>
                </tr>
                <tr>
                  <td>kemet-popover-closed</td>
                  <td colspan="2">Fires when the popover closes.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>methods</b></td>
                </tr>
                <tr>
                  <td>open</td>
                  <td colspan="2">Opens the popover.</td>
                </tr>
                <tr>
                  <td>close</td>
                  <td colspan="2">Closes the popover.</td>
                </tr>
                <tr>
                  <td>toggle</td>
                  <td colspan="2">Toggles the popover.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>css</b></td>
                </tr>
                <tr>
                  <td>--kemet-popover-width</td>
                  <td>The width of the popover contents.</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>--kemet-popover-height</td>
                  <td>The height of the popover contents.</td>
                  <td>auto</td>
                </tr>
                <tr>
                  <td>--kemet-popover-color</td>
                  <td>The text color of the popover's contents.</td>
                  <td>#fafafa</td>
                </tr>
                <tr>
                  <td>--kemet-popover-bgcolor</td>
                  <td>The background color of the popover's contents.</td>
                  <td>#202020</td>
                </tr>
                <tr>
                  <td>--kemet-popover-gap</td>
                  <td>The space between the trigger and content.</td>
                  <td>0px</td>
                </tr>
                <tr>
                  <td>--kemet-popover-transition-speed</td>
                  <td>The speed of the opening and closing effect.</td>
                  <td>0.3s</td>
                </tr>
                <tr>
                  <td>::part(trigger)</td>
                  <td colspan="2">Contains the trigger for the popover.</td>
                </tr>
                <tr>
                  <td>::part(content)</td>
                  <td colspan="2">Contains the content for the popover.</td>
                </tr>
                <tr>
                  <td>::part(tooltip)</td>
                  <td colspan="2">Contains the tooltip for the popover.</td>
                </tr>
                <tr>
                  <td>::part(custom-tooltip)</td>
                  <td colspan="2">Contains the custom tooltip for the popover.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </article>
    `;
  }

  updateEffect(event) {
    this.popovers.forEach((popover) => {
      if (event.target.value === 'none') {
        popover.effect = null;
      } else {
        popover.effect = event.target.value;
      }
    });
  }

  updatePosition(event) {
    this.popovers.forEach((popover) => {
      popover.position = event.target.value;
    });
  }

  handleFireOn(event) {
    this.popovers.forEach((popover) => {
      if (event.target.value === 'click') {
        popover.fireOnClick = true;
        popover.fireOnHover = false;
      } else {
        popover.fireOnClick = false;
        popover.fireOnHover = true;
      }
    });
  }
}
