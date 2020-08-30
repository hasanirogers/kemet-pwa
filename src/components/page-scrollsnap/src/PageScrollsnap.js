import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { versions } from '../../kemet-pwa/src/versions.js';

import {
  snippetImport,
  snippetMarkup,
} from './snippets.js';

import '../../kemet-btn/kemet-btn.js';
import '@kemet/kemet-scroll-snap/kemet-scroll-snap.js';
import '@kemet/kemet-scroll-snap/kemet-scroll-snap-slide.js';
import '@kemet/kemet-scroll-snap/kemet-scroll-snap-paginator.js';


export class PageScrollsnap extends LitElement {
  static get styles() {
    return [
      stylesBase,
      stylesRSCSS,
      css`
        :host {
          display: block;
        }

        kemet-scroll-snap-slide img {
          width: 100%;
        }

        kemet-scroll-snap[axis="vertical"] {
          height: 50vh;
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
      <link href="https://unpkg.com/@kemet/kemet-styles@latest/dist/kemet.components.css" rel="stylesheet" type="text/css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${versions.highlightjs}/styles/vs2015.min.css" rel="stylesheet" type="text/css"/>
      <article>
        <h1>Scroll Snap</h1>
        <section>
          <h2>Installation</h2>
          <p><code>npm install @kemet/kemet-scroll-snap --save</code></p>
          <p>Once installed, you can run <code>npm start</code> to demo locally or <code>npm run storybook</code> for local docs.</p>

          <br><hr><br>

          <h2>Usage</h2>
          <pre><code class="javascript">${snippetImport}</code></pre>
          <h3>Markup</h3>
          <pre><code class="html">${snippetMarkup}</code></pre>

          <br><hr><br>

          <h2>Demo</h2>
          <h3>Hozitontal</h3>
          <kemet-scroll-snap>
            <div slot="slides">
              <kemet-scroll-snap-slide>
                <h3>Heading 1</h3>
                <p>Bacon ipsum dolor amet biltong pork loin boudin ham jerky venison jowl spare ribs fatback, short ribs beef short loin. Porchetta meatball salami ground round, pancetta biltong venison chuck flank. Frankfurter burgdoggen swine, chuck short ribs alcatra strip steak jerky. Rump porchetta fatback kevin flank. Doner chislic salami, brisket rump jowl spare ribs prosciutto bacon buffalo beef ribs beef tenderloin. Chicken ground round andouille, tail jowl leberkas swine brisket. Alcatra filet mignon short ribs short loin, pig chislic turkey.</p>
                <img src="https://cdn.gamer-network.net/2020/usgamer/FINAL-FANTASY-VII-REMAKE-hed-8.jpg" />
              </kemet-scroll-snap-slide>
              <kemet-scroll-snap-slide>
                <h3>Heading 2</h3>
                <p>Bacon ipsum dolor amet biltong pork loin boudin ham jerky venison jowl spare ribs fatback, short ribs beef short loin. Porchetta meatball salami ground round, pancetta biltong venison chuck flank. Frankfurter burgdoggen swine, chuck short ribs alcatra strip steak jerky. Rump porchetta fatback kevin flank. Doner chislic salami, brisket rump jowl spare ribs prosciutto bacon buffalo beef ribs beef tenderloin. Chicken ground round andouille, tail jowl leberkas swine brisket. Alcatra filet mignon short ribs short loin, pig chislic turkey.</p>
                <img src="https://cdn.gamer-network.net/2020/usgamer/FINAL-FANTASY-VII-REMAKE-hed-8.jpg" />
              </kemet-scroll-snap-slide>
              <kemet-scroll-snap-slide>
                <h3>Heading 3</h3>
                <p>Bacon ipsum dolor amet biltong pork loin boudin ham jerky venison jowl spare ribs fatback, short ribs beef short loin. Porchetta meatball salami ground round, pancetta biltong venison chuck flank. Frankfurter burgdoggen swine, chuck short ribs alcatra strip steak jerky. Rump porchetta fatback kevin flank. Doner chislic salami, brisket rump jowl spare ribs prosciutto bacon buffalo beef ribs beef tenderloin. Chicken ground round andouille, tail jowl leberkas swine brisket. Alcatra filet mignon short ribs short loin, pig chislic turkey.</p>
                <img src="https://cdn.gamer-network.net/2020/usgamer/FINAL-FANTASY-VII-REMAKE-hed-8.jpg" />
              </kemet-scroll-snap-slide>
              <kemet-scroll-snap-slide>
                <h3>Heading 4</h3>
                <p>Bacon ipsum dolor amet biltong pork loin boudin ham jerky venison jowl spare ribs fatback, short ribs beef short loin. Porchetta meatball salami ground round, pancetta biltong venison chuck flank. Frankfurter burgdoggen swine, chuck short ribs alcatra strip steak jerky. Rump porchetta fatback kevin flank. Doner chislic salami, brisket rump jowl spare ribs prosciutto bacon buffalo beef ribs beef tenderloin. Chicken ground round andouille, tail jowl leberkas swine brisket. Alcatra filet mignon short ribs short loin, pig chislic turkey.</p>
                <img src="https://cdn.gamer-network.net/2020/usgamer/FINAL-FANTASY-VII-REMAKE-hed-8.jpg" />
              </kemet-scroll-snap-slide>
              <kemet-scroll-snap-slide>
                <h3>Heading 5</h3>
                <p>Bacon ipsum dolor amet biltong pork loin boudin ham jerky venison jowl spare ribs fatback, short ribs beef short loin. Porchetta meatball salami ground round, pancetta biltong venison chuck flank. Frankfurter burgdoggen swine, chuck short ribs alcatra strip steak jerky. Rump porchetta fatback kevin flank. Doner chislic salami, brisket rump jowl spare ribs prosciutto bacon buffalo beef ribs beef tenderloin. Chicken ground round andouille, tail jowl leberkas swine brisket. Alcatra filet mignon short ribs short loin, pig chislic turkey.</p>
                <img src="https://cdn.gamer-network.net/2020/usgamer/FINAL-FANTASY-VII-REMAKE-hed-8.jpg" />
              </kemet-scroll-snap-slide>
            </div>
            <div slot="pagination">
              <kemet-scroll-snap-paginator></kemet-scroll-snap-paginator>
            </div>
          </kemet-scroll-snap>

          <h3>Vertical</h3>
          <kemet-scroll-snap axis="vertical">
            <div slot="slides" style="height:50vh;">
              <kemet-scroll-snap-slide>
                <h3>Heading 1</h3>
                <p>Bacon ipsum dolor amet biltong pork loin boudin ham jerky venison jowl spare ribs fatback, short ribs beef short loin. Porchetta meatball salami ground round, pancetta biltong venison chuck flank. Frankfurter burgdoggen swine, chuck short ribs alcatra strip steak jerky. Rump porchetta fatback kevin flank. Doner chislic salami, brisket rump jowl spare ribs prosciutto bacon buffalo beef ribs beef tenderloin. Chicken ground round andouille, tail jowl leberkas swine brisket. Alcatra filet mignon short ribs short loin, pig chislic turkey.</p>
                <img src="https://cdn.gamer-network.net/2020/usgamer/FINAL-FANTASY-VII-REMAKE-hed-8.jpg" style="width:100%;" />
              </kemet-scroll-snap-slide>
              <kemet-scroll-snap-slide>
                <h3>Heading 2</h3>
                <p>Bacon ipsum dolor amet biltong pork loin boudin ham jerky venison jowl spare ribs fatback, short ribs beef short loin. Porchetta meatball salami ground round, pancetta biltong venison chuck flank. Frankfurter burgdoggen swine, chuck short ribs alcatra strip steak jerky. Rump porchetta fatback kevin flank. Doner chislic salami, brisket rump jowl spare ribs prosciutto bacon buffalo beef ribs beef tenderloin. Chicken ground round andouille, tail jowl leberkas swine brisket. Alcatra filet mignon short ribs short loin, pig chislic turkey.</p>
                <img src="https://cdn.gamer-network.net/2020/usgamer/FINAL-FANTASY-VII-REMAKE-hed-8.jpg" style="width:100%;" />
              </kemet-scroll-snap-slide>
              <kemet-scroll-snap-slide>
                <h3>Heading 3</h3>
                <p>Bacon ipsum dolor amet biltong pork loin boudin ham jerky venison jowl spare ribs fatback, short ribs beef short loin. Porchetta meatball salami ground round, pancetta biltong venison chuck flank. Frankfurter burgdoggen swine, chuck short ribs alcatra strip steak jerky. Rump porchetta fatback kevin flank. Doner chislic salami, brisket rump jowl spare ribs prosciutto bacon buffalo beef ribs beef tenderloin. Chicken ground round andouille, tail jowl leberkas swine brisket. Alcatra filet mignon short ribs short loin, pig chislic turkey.</p>
                <img src="https://cdn.gamer-network.net/2020/usgamer/FINAL-FANTASY-VII-REMAKE-hed-8.jpg" style="width:100%;" />
              </kemet-scroll-snap-slide>
              <kemet-scroll-snap-slide>
                <h3>Heading 4</h3>
                <p>Bacon ipsum dolor amet biltong pork loin boudin ham jerky venison jowl spare ribs fatback, short ribs beef short loin. Porchetta meatball salami ground round, pancetta biltong venison chuck flank. Frankfurter burgdoggen swine, chuck short ribs alcatra strip steak jerky. Rump porchetta fatback kevin flank. Doner chislic salami, brisket rump jowl spare ribs prosciutto bacon buffalo beef ribs beef tenderloin. Chicken ground round andouille, tail jowl leberkas swine brisket. Alcatra filet mignon short ribs short loin, pig chislic turkey.</p>
                <img src="https://cdn.gamer-network.net/2020/usgamer/FINAL-FANTASY-VII-REMAKE-hed-8.jpg" style="width:100%;" />
              </kemet-scroll-snap-slide>
              <kemet-scroll-snap-slide>
                <h3>Heading 5</h3>
                <p>Bacon ipsum dolor amet biltong pork loin boudin ham jerky venison jowl spare ribs fatback, short ribs beef short loin. Porchetta meatball salami ground round, pancetta biltong venison chuck flank. Frankfurter burgdoggen swine, chuck short ribs alcatra strip steak jerky. Rump porchetta fatback kevin flank. Doner chislic salami, brisket rump jowl spare ribs prosciutto bacon buffalo beef ribs beef tenderloin. Chicken ground round andouille, tail jowl leberkas swine brisket. Alcatra filet mignon short ribs short loin, pig chislic turkey.</p>
                <img src="https://cdn.gamer-network.net/2020/usgamer/FINAL-FANTASY-VII-REMAKE-hed-8.jpg" style="width:100%;" />
              </kemet-scroll-snap-slide>
            </div>
          </kemet-scroll-snap>


          <br><hr><br>

          <h2>API</h2>

          <br />

          <h3>&lt;kemet-scroll-snap&gt;</h3>
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
                  <td>Determines the direction the component flows. Values include: (horizontal|vertical)<div><em>String</em></div></td>
                  <td>horizontal</td>
                </tr>
                <tr>
                  <td>pagination</td>
                  <td>Detrmines where to display the paginator. Values include: (top|right|bottom|left)<div><em>String</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>isTouchDevice</td>
                  <td>Is set if touch capibilities are detected.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>slides</td>
                  <td>An array of objects containing info about the slides.<div><em>Array</em></div></td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="3"><b>slots</b></td>
                </tr>
                <tr>
                  <td>slides</td>
                  <td colspan="2">Place your slides here.</td>
                </tr>
                <tr>
                  <td>content</td>
                  <td colspan="2">Place the paginator component here if you want one.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>css</b></td>
                </tr>
                <tr>
                  <td>--kemet-scroll-snap-gap</td>
                  <td>Space between the slides. </td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <br />

          <h3>&lt;kemet-scroll-snap-slide&gt;</h3>
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
                  <td>focused</td>
                  <td>Is true when the slide is fully visible in it's container.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>index</td>
                  <td>Identifies the slide.<div><em>String</em></div></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>label</td>
                  <td>Determines how to label the slide for the paginator.<div><em>String</em></div></td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="3"><b>slots</b></td>
                </tr>
                <tr>
                  <td></td>
                  <td colspan="3">The contents of a slide.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>css</b></td>
                </tr>
                <tr>
                  <td>--kememt-scroll-snap-slide-width</td>
                  <td>The width of the slide.</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>--kemet-scroll-snap-slide-align</td>
                  <td>The scroll-snap alignment.</td>
                  <td>center</td>
                </tr>
              </tbody>
            </table>
          </div>

          <br />

          <h3>&lt;kemet-scroll-snap-pagination&gt;</h3>
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
                  <td>Information about each slide.<div><em>Array</em></div></td>
                  <td></td>
                </tr>
                <tr>
                  <td>icon</td>
                  <td>A character icon used for each page in the pagination iterator.<div><em>String</em></div></td>
                  <td>•</td>
                </tr>
                <tr>
                  <td>useNumberPages</td>
                  <td>If set to true, the pages in the pagination iterator will appear as a set of numbers.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>useLabelPages</td>
                  <td>If set to true, the pages in the pagination iterator will appear as the label set on the slide.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td colspan="3"><b>events</b></td>
                </tr>
                <tr>
                  <td>kemet-scroll-snap-focus</td>
                  <td colspan="3">Fires when a set of slides are focused on.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </article>
    `;
  }
}
