import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { identifyPageGroup } from '../../../utilities/identifyPageGroup.js';

import {
  snippetImport,
  snippetMarkupSelected,
  snippetMarkupIndex
} from './snippets.js';

import '@kemet/kemet-tabs/kemet-tabs.js';
import '@kemet/kemet-tabs/kemet-tab.js';
import '@kemet/kemet-tabs/kemet-tab-panel.js';

export class PageTabs extends LitElement {
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

    identifyPageGroup('components');
  }

  render() {
    return html`
      <link href="https://unpkg.com/@kemet/kemet-styles@latest/dist/kemet.components.css" rel="stylesheet" type="text/css">
      <link href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/styles/vs2015.min.css" rel="stylesheet" type="text/css"/>
      <article>
        <h1>Tabs</h1>
        <section>
          <h2>Installation</h2>
          <p><code>npm install @kemet/kemet-tabs --save</code></p>
          <p>Once installed, you can run <code>npm start</code> to demo locally or <code>npm run storybook</code> for local docs.</p>

          <br><hr><br>

          <h2>Usage</h2>
          <pre><code>${snippetImport}</code></pre>
          <h3>Markup</h3>
          <p>Use the <code>selected</code> attribute if you want to explicitly define which tab corresponds to which panel. You must name all panels and tabs with <code>link</code> and <code>panel</code> attributes respectively. You then set initial tab/panel that's selected with the selected attribute.</p>
          <pre><code>${snippetMarkupSelected}</code></pre>
          <p>The following example shows how to use the tabs without the selected attribute. If you don't use the selected attrbiute kemet-tabs will figure out tabbing based on index so markup order become relavent.</p>
          <pre><code>${snippetMarkupIndex}</code></pre>

          <br><hr><br>

          <h2>Demo</h2>
          <p>Keep in mind that Kemet is a designless system. However <a href="https://github.com/hasanirogers/kemet-styles/blob/master/src/scss/components/tabs.scss" target="_blank">styles were created for this demo</a>. Feel free to use the styles but we encouage you to style it to your specs.</p>
          <h3>Horizontal Tabs</h3>
          <kemet-tabs class="horizontal" selected="ffxv">
            <nav slot="links">
              <kemet-tab link="ffvii">Final Fantasy VII</kemet-tab>
              <kemet-tab link="ffxv">Final Fantasy XV</kemet-tab>
              <kemet-tab link="ffx">Final Fantasy X</kemet-tab>
            </nav>
            <section slot="panels">
              <kemet-tab-panel panel="ffvii">
                <img class="_responsiveimg" src="https://cdn.freebiesupply.com/logos/large/2x/final-fantasy-vii-logo-png-transparent.png" />
              </kemet-tab-panel>
              <kemet-tab-panel panel="ffxv">
                <img class="_responsiveimg" src="https://cdn.gearnuke.com/wp-content/uploads/2016/07/final-fantasy-xv-1-2-768x432.png" />
              </kemet-tab-panel>
              <kemet-tab-panel panel="ffx">
                <img class="_responsiveimg" src="https://www.pngkey.com/png/full/76-768324_final-fantasy-x-logo-png-final-fantasy-x.png" />
              </kemet-tab-panel>
            </section>
          </kemet-tabs>
          <h3>Vertical Tabs</h3>
          <kemet-tabs class="vertical" selected="ffxv">
            <nav slot="links">
              <kemet-tab link="ffvii">Final Fantasy VII</kemet-tab>
              <kemet-tab link="ffxv">Final Fantasy XV</kemet-tab>
              <kemet-tab link="ffx">Final Fantasy X</kemet-tab>
            </nav>
            <section slot="panels">
              <kemet-tab-panel panel="ffvii">
                <img class="_responsiveimg" src="https://cdn.freebiesupply.com/logos/large/2x/final-fantasy-vii-logo-png-transparent.png" />
              </kemet-tab-panel>
              <kemet-tab-panel panel="ffxv">
                <img class="_responsiveimg" src="https://cdn.gearnuke.com/wp-content/uploads/2016/07/final-fantasy-xv-1-2-768x432.png" />
              </kemet-tab-panel>
              <kemet-tab-panel panel="ffx">
                <img class="_responsiveimg" src="https://www.pngkey.com/png/full/76-768324_final-fantasy-x-logo-png-final-fantasy-x.png" />
              </kemet-tab-panel>
            </section>
          </kemet-tabs>
          <p>If you dig into the demo code, you'll notice that the only difference between horizontal and vertical styles is how it's styled with css. That's how much power you have over styling Kemet components.</p>

          <br><hr><br>

          <h2>API</h2>
          <h3>&lt;kemet-tabs&gt;</h3>
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
                  <td>selected</td>
                  <td>Represents which tab is currently selected.<div><em>String</em></div></td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="3"><b>events</b></td>
                </tr>
                <tr>
                  <td>kemet-tab-changed</td>
                  <td colspan="2">Called when a tab is changed.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>slots</b></td>
                </tr>
                <tr>
                  <td>links</td>
                  <td colspan="2">The tabs that link to a panel.</td>
                </tr>
                <tr>
                  <td>panel</td>
                  <td colspan="2">The content that corresponds to each tab.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>&lt;kemet-tab&gt;</h3>
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
                  <td>selected</td>
                  <td>Is applied to the active tab.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>link</td>
                  <td>Represents which panel corresponds to the tab.<div><em>String</em></div></td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="3"><b>events</b></td>
                </tr>
                <tr>
                  <td>kemet-tab-selected</td>
                  <td colspan="2">Called when a tab is selected.</td>
                </tr>
                <tr>
                  <td colspan="3"><b>slot</b></td>
                </tr>
                <tr>
                  <td colspan="3">The contents of the tab.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>&lt;kemet-tab-panel&gt;</h3>
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
                  <td>selected</td>
                  <td>Is applied to the active panel.<div><em>Boolean</em></div></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>panel</td>
                  <td>The name of the panel for linking purposes.<div><em>String</em></div></td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="3"><b>slot</b></td>
                </tr>
                <tr>
                  <td colspan="3">The contents of the panel.</td>
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
