import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';

export class PageAgency extends LitElement {
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

  render() {
    return html`
      <article>
        <h1>Agency</h1>
        <p>Below is the code used to create the Agency template. <a href="https://kemet-templates.stackblitz.io/agency.html" target="_blank">View the template here</a>.</p>
        <iframe src="https://stackblitz.com/edit/kemet-templates?embed=1&file=agency.html&hideExplorer=1&hideNavigation=1&view=editor"></iframe>
      </article>
    `;
  }
}
