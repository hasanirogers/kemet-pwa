import { html, css, LitElement } from 'lit-element';
import { switchRoute } from '../../../utilities/switchRoute.js';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { identifyPageGroup } from '../../../utilities/identifyPageGroup.js';

export class PageStyles extends LitElement {
  static get styles() {
    return [
      stylesBase,
      stylesRSCSS,
      css`
        :host {
          display: flex;
        }

      `
    ];
  }

  firstUpdated() {
    identifyPageGroup('about');
  }

  render() {
    return html`
      <article>
        <h1>About Styles</h1>
        <pre><code>npm install @kemet/styles --save</code></pre>

        <p>When you install the styles you'll get three styles sheets.</p>
        <ol>
          <li><code>kemet.layout.css</code></li>
          <li><code>kemet.utilities.css</code></li>
          <li><code>kemet.components.css</code></li>
        </ol>

        <h2>layout.css</h2>
        <p>These are structual styles based on flexbox. They are there for you to layout a component or even a full page. The layout system is unique in that it uses special attributes. This approach is proven to be much cleaner than writting a million classes like some CSS frameworks.</p>
        <p>Layout comes with the following special attributes:</p>
        <div class="_responsivetable">
          <table>
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>layout</code></td>
                <td>Sets the layout mode. Values can either be flexlayout, flexgrid, or flexlist.</td>
              </tr>
              <tr>
                <td><code>autostack</code></td>
                <td>Automatically stacks the current layout according to the stackpoint configued in <a @click=${() => switchRoute('sass')}>Sass</a>.</td>
              </tr>
              <tr>
                <td><code>gutters</code></td>
                <td>Adds responsive guttes to the layout. Configurable by <a @click=${() => switchRoute('sass')}>Sass</a>.</td>
              </tr>
              <tr>
                <td><code>breakpoint</code></td>
                <td>Use on an item of the current layout. Controls spacing at breakpoints.</td>
              </tr>
              <tr>
                <td><code>align</code></td>
                <td>Allows you to control the align of the current layout.</td>
              </tr>
              <tr>
                <td><code>cross-align</code></td>
                <td>Allows you to control the cross-alignment of the current layout.</td>
              </tr>
              <tr>
                <td><code>order</code></td>
                <td>Controls the order of a layout item. Can be used responsively.</td>
              </tr>
              <tr>
                <td><code>basis</code></td>
                <td>Used on flexgrids in particular. Controls the columns of the grid.</td>
              </tr>
              <tr>
                <td><code>size-content</code></td>
                <td>Used on flexcolumns in particular. Sets the height of an item to the content.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>See <a @click=${() => switchRoute('layout')}>Layout</a> for code examples.</p>

        <h2>utilities.css</h2>
        <p>While Kemet is designless, some utilities don't control the look and feel of an app. Rather they help with layout, sizing, alignment, etc. These type of styles are included in the <a @click=${() => switchRoute('utilities')}>utilities</a>.</p>

        <h2>components.css</h2>
        <p>Because of the designless philosophy, out of the box, Kemet components are minimalist and include styles only for behavior. However kemet styles include a style sheet that does design the components. These example styles allow you to get a feel for how to style the components. Kemet encourages you to style the components as you please.</p>

        <h2>Legacy Support</h2>
        <p>Kemet styles have been tested to work in browsers as far back as IE11.</p>
      </article>
    `;
  }
}
