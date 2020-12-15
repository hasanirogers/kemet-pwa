/* eslint-disable class-methods-use-this */
import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { identifyPageGroup } from '../../../utilities/identifyPageGroup.js';

import {
  snippetImport,
  snippetMarkup,
} from './snippets.js';

import '@kemet/kemet-rotator/kemet-rotator';

export class PageRotator extends LitElement {
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

        input[type="number"] {
          width: 72px;
        }

        .select-box {
          display: inline-block;
          min-width: 100px;
        }
      `
    ];
  }

  static get properties() {
    return {
      effect: {
        type: String
      },

      rotationSpeed: {
        type: Number
      },

      messages: {
        type: Array
      }
    }
  }

  constructor() {
    super();

    this.effect = 'fade',
    this.rotationSpeed = 5;
    this.messages = [
      'Hello! This is a rotator.',
      'Pass it an array and watch it rotate through the text.',
      'Set the rotation speed to 0 to stop the rotator.',
      'You can pass it html like <strong><a href="http://google.com" target="_blank">this link</a></strong>!',
      'Bacon ipsum dolor amet turducken swine pork loin buffalo capicola prosciutto burgdoggen pig biltong. Brisket bresaola bacon landjaeger strip steak cow pork loin pig tenderloin. Kevin pork chop beef ribs boudin ball tip meatball sausage frankfurter landjaeger shank tri-tip porchetta pancetta. Turducken tongue ground round, pastrami meatloaf picanha shankle t-bone turkey bresaola jerky leberkas fatback. Beef fatback jerky landjaeger sausage frankfurter ham hock cow pork belly.'
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
        <h1>Rotator</h1>
        <section>
          <h2>Installation</h2>
          <p><code>npm install @kemet/kemet-rotator --save</code></p>
          <p>Once installed, you can run <code>npm start</code> to demo locally or <code>npm run storybook</code> for local docs.</p>

          <br><hr><br>

          <h2>Usage</h2>
          <pre><code class="javascript">${snippetImport}</code></pre>
          <h3>Markup</h3>
          <pre><code class="html">${snippetMarkup}</code></pre>

          <br><hr><br>

          <h2>Demo</h2>

          <form>
            <label>
              Effect:&nbsp;&nbsp;
              <div class="select-box">
                <select
                  class="select"
                  @blur=${(event) => this.updateEffect(event)}
                  @change=${(event) => this.updateEffect(event)}>
                  <option value="fade" selected>Fade</option>
                  <option value="flip">Flip</option>
                </select>
              </div>
            </label>

            &nbsp;&nbsp;

            <label>
              Rotation Speed (in seconds):&nbsp;&nbsp;
              <input type="number" @change=${(event) => this.updateRotationSpeed(event)} value=${this.rotationSpeed} />
            </label>
          </form>

          <br><hr><br>

          <kemet-rotator
            .effect="${this.effect}"
            .rotationSpeed="${this.rotationSpeed}"
            .messages=${this.messages}>
          </kemet-rotator>

          <br><hr><br>

          <h2>API</h2>
          <h3>&lt;kemet-rotator&gt;</h3>
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
                  <td>activeSlide</td>
                  <td>The index number for the current slide.<div><em>Number</em></div></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>width</td>
                  <td>The width of the rotator block.<div><em>String</em></div></td>
                  <td>auto</td>
                </tr>
                <tr>
                  <td>height</td>
                  <td>The height of the rotator block.<div><em>String</em></div></td>
                  <td>auto</td>
                </tr>
                <tr>
                  <td>messages</td>
                  <td>Text in the rotator. Supports HTML.<div><em>Array</em></div></td>
                  <td>[]</td>
                </tr>
                <tr>
                  <td>effect</td>
                  <td>The transition effect type. Values include: (fade | flip)<div><em>String</em></div></td>
                  <td>fade</td>
                </tr>
                <tr>
                  <td>rotationSpeed</td>
                  <td>How fast, in seconds, each slide lasts. Stop the rotator with 0.<div><em>Number</em></div></td>
                  <td>3</td>
                </tr>
                <tr>
                  <td colspan="3"><b>methods</b></td>
                </tr>
                <tr>
                  <td>nextSlide</td>
                  <td colspan="2">Transitions to the next text in the array.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>css</b></td>
                </tr>
                <tr>
                  <td>--kemet-rotator-transition-speed</td>
                  <td>How long, in css time units, the transition effect lasts.</td>
                  <td>500ms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </article>
    `;
  }

  updateEffect(event) {
    this.effect = event.target.value;
  }

  updateRotationSpeed(event) {
    this.rotationSpeed = event.target.value;
  }
}
