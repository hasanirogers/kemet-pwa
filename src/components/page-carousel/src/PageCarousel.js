/* eslint-disable class-methods-use-this */
import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { versions } from '../../kemet-pwa/src/versions.js';

import {
  snippetImport,
  snippetMarkup,
  snippetBasic,
  snippetPagination,
  snippetSlideshow,
  snippetTransitions,
  snippetDisabling
} from './snippets.js';

import '../../kemet-btn/kemet-btn.js';

import '@kemet/kemet-carousel/kemet-carousel.js';
import '@kemet/kemet-carousel/kemet-carousel-slide.js';
import '@kemet/kemet-carousel/kemet-carousel-link.js';
import '@kemet/kemet-carousel/kemet-carousel-next.js';
import '@kemet/kemet-carousel/kemet-carousel-prev.js';

import '@kemet/kemet-accordion/kemet-accordion.js';
import '@kemet/kemet-tabs/kemet-tabs.js';
import '@kemet/kemet-tabs/kemet-tab.js';
import '@kemet/kemet-tabs/kemet-tab-panel.js';

export class PageCarousel extends LitElement {
  static get properties() {
    return {
      currentSlide: {
        type: String,
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

        .demo {
          max-width: 640px;
        }

        .demo > header {
          display: grid;
          grid-gap: 1rem;
          grid-template-columns: 1fr 1fr;
          align-items: center;
        }

        .demo > header :last-child {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .select-box {
          min-width: 100px;
          display: inline-block;
        }
      `
    ];
  }

  constructor() {
    super();

    this.currentSlide = 1;
  }

  firstUpdated() {
    this.carousel = this.shadowRoot.querySelector('kemet-carousel');

    this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
      window.hljs.highlightBlock(block);
    });

    this.addEventListener('kemet-carousel-change-finished', (event) => {
      this.currentSlide = event.detail.index + 1;
    });
  }

  render() {
    return html`
      <link href="https://unpkg.com/@kemet/kemet-styles@latest/dist/kemet.components.css" rel="stylesheet" type="text/css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${versions.highlightjs}/styles/vs2015.min.css" rel="stylesheet" type="text/css"/>
      <article>
        <h1>Carousel</h1>
        <section>
          <h2>Installation</h2>
          <p><code>npm install @kemet/kemet-carousel --save</code></p>
          <p>Once installed, you can run <code>npm start</code> to demo locally or <code>npm run storybook</code> for local docs.</p>

          <br><hr><br>

          <h2>Usage</h2>
          <pre><code class="javascript">${snippetImport}</code></pre>
          <h3>Basic Markup</h3>
          <pre><code>${snippetMarkup}</code></pre>

          <br><hr><br>

          <h2>Demo</h2>
          <p>Keep in mind that Kemet is a designless system. However <a href="https://github.com/hasanirogers/kemet-styles/blob/master/src/scss/components/carousel.scss" target="_blank">styles were created for this demo</a>. Feel free to use the styles but we encouage you to style it to your specs.</p>

          <section class="demo">
            <header>
              <h3>Current Slide: ${this.currentSlide}</h3>
              <div>
                Pagination:&nbsp;
                <div class="select-box">
                  <select class="select" @change=${(event) => this.handleChange(event)}>
                    <option value="top">Top</option>
                    <option value="right">Right</option>
                    <option value="bottom" selected>Bottom</option>
                    <option value="left">Left</option>
                  </select>
                </div>
              </div>
            </header>

            <kemet-carousel pagination="bottom" index="1">
              <div slot="slides">
                <kemet-carousel-slide>
                  <div>
                    <h1>
                      Slide one.
                      <kemet-carousel-next disabled style="position:relative; top:8px;">
                        <svg viewBox="0 0 24 24" width="32" height="32" fill="rgba(36,49,56,1)">
                          <path d="M9.98 6l6 6-6 6-1.4-1.4 4.6-4.6-4.6-4.6z"></path>
                        </svg>
                      </kemet-carousel-next>
                    </h1>
                    <button @click=${this.enableNextBtn}>Click to Enable Next Arrow</button>
                  </div>
                </kemet-carousel-slide>
                <kemet-carousel-slide>
                  <img src="https://assets.rpgsite.net/images/images/000/077/892/original/Final-Fantasy-VII-Remake_20190619_06.jpg" />
                </kemet-carousel-slide>
                <kemet-carousel-slide transition="vertical">
                  <div>Slide three (vertical).</div>
                </kemet-carousel-slide>
                <kemet-carousel-slide>
                  <div>
                    <iframe width="420" height="285" src="https://www.youtube.com/embed/MDets1_G9gQ"></iframe>
                  </div>
                </kemet-carousel-slide>
                <kemet-carousel-slide transition="fade">
                  <div>Slide five (fade).</div>
                </kemet-carousel-slide>
              </div>
              <div slot="pagination">
                <div>
                  <kemet-carousel-prev>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="#ffffff">
                      <path d="M15.42 7.4l-4.6 4.6 4.6 4.6-1.4 1.4-6-6 6-6z"></path>
                    </svg>
                  </kemet-carousel-prev>
                  <kemet-carousel-link slide="0">
                    <a>1</a>
                  </kemet-carousel-link>
                  <kemet-carousel-link slide="1">
                    <a>2</a>
                  </kemet-carousel-link>
                  <kemet-carousel-link slide="2">
                    <a>3</a>
                  </kemet-carousel-link>
                  <kemet-carousel-link slide="3">
                    <a>4</a>
                  </kemet-carousel-link>
                  <kemet-carousel-link slide="4">
                    <a>5</a>
                  </kemet-carousel-link>
                  <kemet-carousel-next>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="#ffffff">
                      <path d="M9.98 6l6 6-6 6-1.4-1.4 4.6-4.6-4.6-4.6z"></path>
                    </svg>
                  </kemet-carousel-next>
                </div>
              </div>
            </kemet-carousel>
            <br>
            <hr>
            <br>
            <p>
              <kemet-btn @click=${this.startSlideShow}>Start Slideshow</kemet-btn>
              &nbsp;&nbsp;
              <kemet-btn @click=${this.stopSlideShow}>Stop Slideshow</kemet-btn>
            </p>
          </section>

          <br><hr><br>

          <h2>Examples</h2>
          <p><code>kemet-carousel</code> comes with many elements with plenty of properties that adds complexity to its usage. So here are some examples demonstrating how to use it. Select a tab to see an example.</p>

          <kemet-tabs class="horizontal" selected="basic">
            <nav slot="links">
              <kemet-tab link="basic">Basic</kemet-tab>
              <kemet-tab link="pagination">Pagination</kemet-tab>
              <kemet-tab link="slideshow">Slideshow</kemet-tab>
              <kemet-tab link="transitions">Transitions</kemet-tab>
              <kemet-tab link="disabling">Disabling</kemet-tab>
            </nav>
            <section slot="panels">
              <kemet-tab-panel panel="basic">
                <p>You can use <code>kemet-carousel-link</code>, <code>kemet-carousel-prev</code>, and <code>kemet-carousel-next</code> to create pagination as you please. Use the slide property with kemet-carousel-link to link to a slide. Notice how it's zero indexed.</p>
                <br>
                <kemet-carousel>
                  <div slot="slides">
                    <kemet-carousel-slide>Slide One</kemet-carousel-slide>
                    <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
                    <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
                  </div>
                  <div slot="pagination">
                    <kemet-carousel-prev>Prev</kemet-carousel-prev>
                    <kemet-carousel-link slide="0">1</kemet-carousel-link>
                    <kemet-carousel-link slide="1">2</kemet-carousel-link>
                    <kemet-carousel-link slide="2">3</kemet-carousel-link>
                    <kemet-carousel-next>Next</kemet-carousel-next>
                  </div>
                </kemet-carousel>
                <kemet-accordion>
                  <a slot="trigger">
                    <kemet-btn>Show Code</kemet-btn>
                  </a>
                  <div slot="panel">
                    <pre><code>${snippetBasic}</code></pre>
                  </div>
                </kemet-accordion>
              </kemet-tab-panel>
              <kemet-tab-panel panel="pagination">
                <p>You can change the position of the paginator with the <code>pagination</code> property. Possible values are: top, right, bottom, left. Default is bottom.</p>
                <br>
                <kemet-carousel pagination="top">
                  <div slot="slides">
                    <kemet-carousel-slide>Slide One</kemet-carousel-slide>
                    <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
                    <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
                  </div>
                  <div slot="pagination">
                    <kemet-carousel-prev>Prev</kemet-carousel-prev>
                    <kemet-carousel-link slide="0">1</kemet-carousel-link>
                    <kemet-carousel-link slide="1">2</kemet-carousel-link>
                    <kemet-carousel-link slide="2">3</kemet-carousel-link>
                    <kemet-carousel-next>Next</kemet-carousel-next>
                  </div>
                </kemet-carousel>
                <kemet-accordion>
                  <a slot="trigger">
                    <kemet-btn>Show Code</kemet-btn>
                  </a>
                  <div slot="panel">
                    <pre><code>${snippetPagination}</code></pre>
                  </div>
                </kemet-accordion>
              </kemet-tab-panel>
              <kemet-tab-panel panel="slideshow">
                <p>You can use the <code>slideshow</code> property to auto-play the slides. In this example a slide will play every 3 seconds. Slideshow is disabled if set to 0 seconds, which is the default.</p>
                <br>
                <kemet-carousel slideshow="3">
                  <div slot="slides">
                    <kemet-carousel-slide>Slide One</kemet-carousel-slide>
                    <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
                    <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
                  </div>
                </kemet-carousel>
                <kemet-accordion>
                  <a slot="trigger">
                    <kemet-btn>Show Code</kemet-btn>
                  </a>
                  <div slot="panel">
                    <pre><code>${snippetSlideshow}</code></pre>
                  </div>
                </kemet-accordion>
              </kemet-tab-panel>
              <kemet-tab-panel panel="transitions">
                <p>You can set a transition on each slide. Here we fade the slides. Possible values are: horizontal, vertical, and fade. Default is horizontal.</p>
                <br>
                <kemet-carousel slideshow="3">
                  <div slot="slides">
                    <kemet-carousel-slide transition="fade">Slide One</kemet-carousel-slide>
                    <kemet-carousel-slide transition="fade">Slide Two</kemet-carousel-slide>
                    <kemet-carousel-slide transition="fade">Slide Three</kemet-carousel-slide>
                  </div>
                </kemet-carousel>
                <kemet-accordion>
                  <a slot="trigger">
                    <kemet-btn>Show Code</kemet-btn>
                  </a>
                  <div slot="panel">
                    <pre><code>${snippetTransitions}</code></pre>
                  </div>
                </kemet-accordion>
              </kemet-tab-panel>
              <kemet-tab-panel panel="disabling">
                <p><code>kemet-carousel-link</code>, <code>kemet-carousel-prev</code>, and <code>kemet-carousel-next</code> all support the disabled property. Use this to control when and how a user can navigate to a slide. In this example, the user can't go to the next slide until they enable doing so with the button in slide one.</p>
                <br>
                <kemet-carousel>
                  <div slot="slides">
                    <kemet-carousel-slide>
                      <button @click=${event => this.enableNextBtn(event)}>Click to enable next.</button>
                    </kemet-carousel-slide>
                    <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
                    <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
                  </div>
                  <div slot="pagination">
                    <kemet-carousel-next disabled>Next</kemet-carousel-next>
                  </div>
                </kemet-carousel>
                <kemet-accordion>
                  <a slot="trigger">
                    <kemet-btn>Show Code</kemet-btn>
                  </a>
                  <div slot="panel">
                    <pre><code>${snippetDisabling}</code></pre>
                  </div>
                </kemet-accordion>
              </kemet-tab-panel>
            </section>
          </kemet-tabs>

          <br>

          <h2>API</h2>
          <h3>&lt;kemet-carousel&gt;</h3>
          <p>This is the wrapper for your carousel.</p>
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
                  <td>index</td>
                  <td>Gives and identity to each slide by indexing them.<div><em>Number</em></div></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>pagination</td>
                  <td>The position your pagination slot appears in. Possible values are: top, right, bottom, left.<div><em>String</em></div></td>
                  <td>bottom</td>
                </tr>
                <tr>
                  <td>slideshow</td>
                  <td>The number of seconds to wait for auto slide switching, 0 means don't auto play.<div><em>Number</em></div></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>usehash</td>
                  <td>Turns on linking to slides by url. It's only met to be used with one carousel on the page.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td colspan="3"><b>slots</b></td>
                </tr>
                <tr>
                  <td>slides</td>
                  <td colspan="2">Place your slides here.</td>
                </tr>
                <tr>
                  <td>pagination</td>
                  <td colspan="2">If you want a paginator create it here.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>events</b></td>
                </tr>
                <tr>
                  <td>kemet-carousel-change-start</td>
                  <td colspan="2">Fires when a slide changes.</td>
                </tr>
                <tr>
                  <td>kemet-carousel-change-finished</td>
                  <td colspan="2">Fires after the transition effect of a slide change finishes.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>css</b></td>
                </tr>
                <tr>
                  <td>--kemet-carousel-width</td>
                  <td>Width of the carousel.</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>--kemet-carousel-height</td>
                  <td>Height of the carousel.</td>
                  <td>50vh</td>
                </tr>
              </tbody>
            </table>
          </div>

          <br>

          <h3>&lt;kemet-carousel-slide&gt;</h3>
          <p>Each slide has its own element.</p>
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
                  <td>transition</td>
                  <td>An effect for how the slide comes in and out.<div><em>String</em></div></td>
                  <td>horizontal</td>
                </tr>
                <tr>
                  <td colspan="3"><b>slots</b></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td colspan="2">The contents of a slide.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>css</b></td>
                </tr>
                <tr>
                  <td>--kemet-carousel-slide-speed</td>
                  <td>The speed of horiztonal and vertical transitions</td>
                  <td>0.3s</td>
                </tr>
                <tr>
                  <td>--kemet-carousel-slide-fade-speed</td>
                  <td>The speed of the fade transition</td>
                  <td>1s</td>
                </tr>
              </tbody>
            </table>
          </div>

          <br>

          <h3>&lt;kemet-carousel-link&gt;</h3>
          <p>Acts as a link to individual slides.</p>
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
                  <td>slide</td>
                  <td>Which slide to link to. Goes by 0 based index.<div><em>Number</em></div></td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>selected</td>
                  <td>Whether or not the link is current slide.<div><em>Boolean</em></div></td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>Allow the users to disable linking until conditions are met.<div><em>Boolean</em></div></td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="3"><b>slots</b></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td colspan="2">The contents of a link.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>events</b></td>
                </tr>
                <tr>
                  <td>kemet-carousel-link</td>
                  <td colspan="2">Fires when a link is clicked.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <br>

          <h3>&lt;kemet-carousel-prev&gt;</h3>
          <p>Links to the previous slide.</p>
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
                  <td>disabled</td>
                  <td>Allow the users to disable linking until conditions are met.<div><em>Boolean</em></div></td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="3"><b>slots</b></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td colspan="2">The contents of a link.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>events</b></td>
                </tr>
                <tr>
                  <td>kemet-carousel-prev</td>
                  <td colspan="2">Fires when a link is clicked.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <br>

          <h3>&lt;kemet-carousel-next&gt;</h3>
          <p>Links to the next slide.</p>
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
                  <td>disabled</td>
                  <td>Allow the users to disable linking until conditions are met.<div><em>Boolean</em></div></td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="3"><b>slots</b></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td colspan="2">The contents of a link.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>events</b></td>
                </tr>
                <tr>
                  <td>kemet-carousel-next</td>
                  <td colspan="2">Fires when a link is clicked.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </article>
    `;
  }

  handleChange(event) {
    this.carousel.pagination = event.target.value;
  }

  startSlideShow() {
    this.carousel.slideshow = 6;
    this.carousel.handleNext();
  }

  stopSlideShow() {
    this.carousel.slideshow = 0;
  }

  enableNextBtn() {
    const nextBtns = this.shadowRoot.querySelectorAll('kemet-carousel-next[disabled]');

    nextBtns.forEach((btn) => {
      // eslint-disable-next-line no-param-reassign
      btn.disabled = false;
    });
  }
}
