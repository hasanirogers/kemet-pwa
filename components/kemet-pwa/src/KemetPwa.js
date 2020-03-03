/* eslint-disable no-restricted-globals */
import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';
import { stylesBase, stylesKemetDrawer } from '../../../assets/styles.js';
import { svgHamburger } from '../../../assets/svg.js';

import '@kemet/kemet-drawer/kemet-drawer';

import '../../kemet-nav/kemet-nav.js';
import '../../page-intro/page-intro.js';
import '../../page-styles/page-styles.js';

export class KemetPwa extends LitElement {
  static get styles() {
    return [
      stylesBase,
      stylesKemetDrawer,
      css`
        .hamburger {
          display: block;
          margin: 0.5rem;
        }

        .hamburger svg {
          width: 32px;
          height: 32px;
        }

        /*
        [data-outlet] > .leaving {
          animation: 1s fadeOut ease-in-out;
        }

        [data-outlet] > .entering {
          animation: 1s fadeIn linear;
        }

        @keyframes fadeOut {
          from {opacity: 1;}
          to {opacity: 0;}
        }

        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }
        */

        @media screen and (min-width: 768px) {
          .hamburger {
            display: none;
          }
        }
      `,
    ];
  }

  firstUpdated() {
    this.drawer = this.shadowRoot.querySelector('kemet-drawer');
    const router = new Router(this.shadowRoot.querySelector('[data-outlet]'));

    // router.setRoutes([
    //   { path: '/', component: 'page-intro' },
    //   { path: '/introduction', component: 'page-intro' },
    //   { path: '/styles', component: 'page-styles' },
    //   { path: '(.*)', redirect: '/' },
    // ]);

    router.setRoutes([{
      path: '/',
      animate: true,
      children: [
        { path: '/', component: 'page-intro' },
        { path: '/introduction', component: 'page-intro' },
        { path: '/styles', component: 'page-styles' },
        { path: '(.*)', redirect: '/' },
      ]
    }]);
  }

  render() {
    return html`
      <kemet-drawer effect="scale">
        <nav class="site-nav" slot="navigation">
          <kemet-nav></kemet-nav>
        </nav>
        <section slot="content">
          <a class="hamburger" @click=${this.toggleDrawer}>
            ${svgHamburger}
          </a>
          <kemet-nav content></kemet-nav>
          <main data-outlet></main>
        </section>
      </kemet-drawer>
    `;
  }

  toggleDrawer() {
    this.drawer.toggle();
  }
}