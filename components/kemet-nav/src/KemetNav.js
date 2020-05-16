/* eslint-disable no-restricted-globals */
import { html, css, LitElement } from 'lit-element';
import { Router } from '@vaadin/router';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';
import { svgAnubis } from '../../../assets/svg.js';

export class KemetNav extends LitElement {
  static get properties() {
    return {
      page: {
        type: String,
        reflect: true,
      },

      blurContent: {
        type: Boolean
      },

      scaleContent: {
        type: Boolean
      }
    };
  }

  static get styles() {
    return [
      stylesBase,
      stylesRSCSS,
      css`
        section {
          width: 100%;
          display: inline-block;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 0;
          overflow-y: auto;
          transition: transform 300ms ease;
        }

        h1 {
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        h1 svg {
          width: 48px;
          height: 48px;
          fill: var(--app-white-rich);
        }

        h1 span {
          position: relative;
          top: 8px;
        }

        h2 {
          font-size: 0.9rem;
        }

        a {
          font-size: 0.8rem;
          transition: color 300ms ease;
        }

        a:hover {
          color: var(--app-secondary-color);
        }

        ul {
          margin: 0 0 2rem 0;
          padding: 0;
        }

        li {
          list-style: none;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }

        h1,
        h2,
        li {
          padding-right: 6rem;
          padding-left: 2rem;
        }

        .active {
          background: var(--app-black-25);
        }

        :host([content]),
        :host([content][page='introduction']) {
          display: none;
        }

        :host([content]) section {
          width: auto;
          border-right: 1px solid var(--app-black-25);
        }

        :host([content]) a:hover {
          color: var(--app-black);
        }

        :host([content]) h1 svg {
          fill: var(--app-primary-color-75);
        }

        :host([content]) .active {
          border-right: 3px solid var(--app-primary-color);
          background: transparent;
        }

        :host([content]) .active::before {
          content: '—';
        }

        @media screen and (min-width: 768px) {
          :host([content]) {
            display: block;
          }
        }
      `,
    ];
  }

  constructor() {
    super();

    this.scaleContent = false;
    this.page = location.pathname === '/' ? 'introduction' : location.pathname.replace('/', '');

    document.addEventListener('switched-route', this.handleSwitchRoute.bind(this));
  }

  firstUpdated() {
    this.drawer = document.querySelector('kemet-pwa').shadowRoot.querySelector('kemet-drawer');
  }

  render() {
    return html`
      <section class="${this.blurContent ? '-blur' : ''} ${this.scaleContent ? '-scale' : ''}">
        <h1 @click=${() => { this.switchRoute('introduction'); }}>
          ${svgAnubis}
          <span>Kemet</span>
        </h1>

        <h2>Styles</h2>
        <ul>
          <li class="${this.page === 'styles' ? 'active' : ''}">
            <a @click=${() => { this.switchRoute('styles'); }}>About</a>
          </li>
          <li class="${this.page === 'layout' ? 'active' : ''}">
            <a @click=${() => { this.switchRoute('layout'); }}>Layout</a>
          </li>
          <li class="${this.page === 'utilities' ? 'active' : ''}">
            <a @click=${() => { this.switchRoute('utilities'); }}>Utilities</a>
          </li>
          <li class="${this.page === 'sass' ? 'active' : ''}">
            <a @click=${() => { this.switchRoute('sass'); }}>Sass</a>
          </li>
        </ul>

        <h2>Components</h2>
        <ul>
          <li class="${this.page === 'components' ? 'active' : ''}">
            <a @click=${() => { this.switchRoute('components'); }}>About</a>
          </li>
          <li class="${this.page === 'drawer' ? 'active' : ''}">
            <a @click=${() => { this.switchRoute('drawer'); }}>Drawer</a>
          </li>
          <li class="${this.page === 'tabs' ? 'active' : ''}">
            <a @click=${() => { this.switchRoute('tabs'); }}>Tabs</a>
          </li>
          <li class="${this.page === 'accordion' ? 'active' : ''}">
            <a @click=${() => { this.switchRoute('accordion'); }}>Accordion</a>
          </li>
          <li class="${this.page === 'modal' ? 'active' : ''}">
            <a @click=${() => { this.switchRoute('modal'); }}>Modal</a>
          </li>
          <li class="${this.page === 'carousel' ? 'active' : ''}">
            <a @click=${() => { this.switchRoute('carousel'); }}>Carousel</a>
          </li>
        </ul>

        <h2>Templates</h2>
        <ul>
          <li class="${this.page === 'templates' ? 'active' : ''}">
            <a @click=${() => { this.switchRoute('templates'); }}>About</a>
          </li>
          <li class="${this.page === 'agency' ? 'active' : ''}">
            <a @click=${() => { this.switchRoute('agency'); }}>Agency</a>
          </li>
          <li class="${this.page === 'ecommerce' ? 'active' : ''}">
            <a @click=${() => { this.switchRoute('ecommerce'); }}>Ecommerce</a>
          </li>
          <li class="${this.page === 'news' ? 'active' : ''}">
            <a @click=${() => { this.switchRoute('news'); }}>News</a>
          </li>
          <li class="${this.page === 'travel' ? 'active' : ''}">
            <a @click=${() => { this.switchRoute('travel'); }}>Travel</a>
          </li>
        </ul>
      </section>
    `;
  }

  switchRoute(route) {
    this.page = route;
    Router.go(`/${route}`);
    this.drawer.close();
  }

  handleSwitchRoute(event) {
    this.page = event.detail;
  }
}
