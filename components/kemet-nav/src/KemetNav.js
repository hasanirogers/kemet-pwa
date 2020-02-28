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
          display: inline-block;
          height: 100vh;
          position: fixed;
          border-right: 1px solid var(--app-black-25);
        }

        h2 {
          font-size: 0.9rem;
        }

        a {
          font-size: 0.8rem;
        }

        ul {
          margin: 0 0 2rem 0;
          padding: 0;
        }

        li {
          list-style: none;
          margin: 0.5rem 0;
        }

        h1,
        h2,
        li {
          padding: 0 6rem 0 2rem;
        }

        :host([content]),
        :host([content][page='introduction']) {
          display: none;
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
    // this.drawer = document.querySelector('kemet-drawer');
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
          <li class="${this.page === 'about-styles' ? 'active' : ''}">
            <a
              @click=${() => {
                this.switchRoute('about-styles');
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
            <a>Agency</a>
          </li>
          <li>
            <a>Ecommerce</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Travel</a>
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
