import { html, css, LitElement } from 'lit-element';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { versions } from '../../kemet-pwa/src/versions.js';

import '@kemet/kemet-accordion/kemet-accordion.js';

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

  firstUpdated() {
    this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
      window.hljs.highlightBlock(block);
    });
  }

  render() {
    return html`
      <link href="https://unpkg.com/@kemet/kemet-styles@${versions.kemetStyles}/dist/kemet.components.css" rel="stylesheet" type="text/css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${versions.highlightjs}/styles/vs2015.min.css" rel="stylesheet" type="text/css"/>
      <article>
        <h1>Agency</h1>
        <p>Below is the code used to create the Agency template. <a href="https://kemet-templates.stackblitz.io/agency.html" target="_blank">View the template here</a>.</p>
        <iframe src="https://stackblitz.com/edit/kemet-templates?embed=1&file=agency.html&hideExplorer=1&hideNavigation=1&view=editor"></iframe>
      </article>
    `;
  }
}
