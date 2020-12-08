import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { identifyPageGroup } from '../../../utilities/identifyPageGroup.js';

export class PageNews extends LitElement {
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
    identifyPageGroup('templates');
  }

  render() {
    return html`
      <article>
        <h1>News</h1>
        <p>Below is the code used to create the News template. <a href="https://kemet-templates.stackblitz.io/news.html" target="_blank">View the template here</a>.</p>
        <iframe src="https://stackblitz.com/edit/kemet-templates?embed=1&file=news.html&hideExplorer=1&hideNavigation=1&view=editor"></iframe>
      </article>
    `;
  }
}
