import { html, css, LitElement } from 'lit-element';
import { stylesBase } from '../../../assets/styles.js';

export class PageComponents extends LitElement {
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

  render() {
    return html`
      <link href="https://unpkg.com/@kemet/kemet-styles@1.3.1/dist/kemet.layout.css" rel="stylesheet" type="text/css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/vs2015.min.css" rel="stylesheet" type="text/css"/>
      <article>
        <h1>Components</h1>
        <p>Kemet components are built with <a href="https://lit-element.polymer-project.org" target="_blank">LitElement</a>. LitElement is library for building WebComponents. Since Kemet components are WebComponents, they are framework agnostic and will work in Angular, React, Vue, etc.</p>
        <p>Every Kemet component comes with:</p>
        <ol>
          <li>A demo/index.html file that demos what the component can do. Run <code>npm start</code> to view.</li>
          <li>A storybook that can be ran with <code>npm run storybook</code>.</li>
          <li>80% or higher unit test coverage for greater confidence that the components does what it sets out to do.</li>
        </ol>

        <p>See each component page for installation and usage instructions. These are modern components are and have tested only in modern browsers.</p>
        <p>Shout out to <a href="https://open-wc.org" target="_blank">open-wc</a> for building an amazing scafolding tool that makes building these components a breeze.</p>
      </article>
    `;
  }
}
