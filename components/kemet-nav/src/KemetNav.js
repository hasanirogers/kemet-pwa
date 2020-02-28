/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
import { html, css, LitElement } from 'lit-element';
import { Router } from '@vaadin/router';
import { stylesBase } from '../../../assets/styles.js';

export class KemetNav extends LitElement {
  static get properties() {
    return {
      page: {
        type: String,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [
      stylesBase,
      css`
        section {
          width: 100%;
          display: inline-block;
          height: 100vh;
          position: fixed;
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

    this.page = location.pathname === '/' ? 'introduction' : location.pathname.replace('/', '');
  }

  firstUpdated() {
    this.drawer = document.querySelector('kemet-pwa').shadowRoot.querySelector('kemet-drawer');
  }

  render() {
    return html`
      <section>
        <h1>Kemet</h1>
        <ul>
          <li class="${this.page === 'introduction' ? 'active' : ''}">
            <a
              @click=${() => {
                this.switchRoute('introduction');
              }}
              >Introduction</a
            >
          </li>
        </ul>

        <h2>Styles</h2>
        <ul>
          <li class="${this.page === 'styles' ? 'active' : ''}">
            <a
              @click=${() => {
                this.switchRoute('styles');
              }}
              >About</a
            >
          </li>
          <li>
            <a>Layout</a>
          </li>
          <li>
            <a>Utilities</a>
          </li>
          <li>
            <a>Sass</a>
          </li>
        </ul>

        <h2>Components</h2>
        <ul>
          <li>
            <a>Drawer</a>
          </li>
          <li>
            <a>Tabs</a>
          </li>
          <li>
            <a>Accordion</a>
          </li>
          <li>
            <a>Modal</a>
          </li>
          <li>
            <a>Carousel</a>
          </li>
        </ul>

        <h2>Templates</h2>
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a
              href="https://kemet-templates.stackblitz.io/agency.html"
              target="_blank"
              style="text-decoration:none;"
              >Agency</a
            >
          </li>
          <li>
            <a
              href="https://kemet-templates.stackblitz.io/ecommerce.html"
              target="_blank"
              style="text-decoration:none;"
              >Ecommerce</a
            >
          </li>
          <li>
            <a
              href="https://kemet-templates.stackblitz.io/news.html"
              target="_blank"
              style="text-decoration:none;"
              >News</a
            >
          </li>
          <li>
            <a
              href="https://kemet-templates.stackblitz.io/travel.html"
              target="_blank"
              style="text-decoration:none;"
              >Travel</a
            >
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
}
