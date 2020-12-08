import { html, css, LitElement } from 'lit-element';
import { stylesBase } from '../../../assets/styles.js';
import { identifyPageGroup } from '../../../utilities/identifyPageGroup.js';

export class PageTemplates extends LitElement {
  static get styles() {
    return [
      stylesBase,
      css`
        :host {
          display: block;
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
        <h1>Templates</h1>
        <p>Kemet templates are inspired by <a href="https://get.foundation/templates.html" target="_blank">Zurb Foundation</a>. You'll find that they accomplish the same layout with much cleaner code. Notice that each template some small CSS for basic page structure. This is because Kemet is designless and only include styles for layout. You can structure your page however you please.</p>
        <p>As of right now the templates are strictly HTML templates. But in the future we'll be adding templates with components baked into them.</p>
      </article>
    `;
  }
}
