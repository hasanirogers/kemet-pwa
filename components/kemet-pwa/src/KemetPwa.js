/* eslint-disable no-restricted-globals */
import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { stylesBase } from '../../../assets/styles.js';
import { svgHamburger } from '../../../assets/svg.js';

import '@kemet/kemet-drawer/kemet-drawer';

import '../../kemet-nav/kemet-nav.js';
import '../../page-intro/page-intro.js';
import '../../page-about-styles/page-about-styles.js';

export class KemetPwa extends LitElement {
  static get properties() {
    return {
      activeTab: { type: String },
      tabs: { type: Array },
      smallScreen: { type: Boolean },
      openDrawer: { type: Boolean },
    };
  }

  static get styles() {
    return [
      stylesBase,
      css`
        .hamburger {
          display: block;
          margin: 0.5rem;
        }

        @media screen and (min-width: 768px) {
          .hamburger {
            display: none;
          }
        }
      `,
    ];
  }

  constructor() {
    super();

    // reactive properties
    this.activeTab = location.pathname === '/' ? 'page-intro' : location.pathname.replace('/', '');
    this.tabs = ['page-intro', 'page-about-styles'];
    this.openDrawer = false;

    installMediaQueryWatcher(`(min-width: 600px)`, matches => {
      this.smallScreen = !matches;
    });
  }

  firstUpdated() {
    this.drawer = this.shadowRoot.querySelector('kemet-drawer');
    const router = new Router(this.shadowRoot.querySelector('[data-outlet]'));

    router.setRoutes([
      { path: '/', component: 'page-intro' },
      { path: '/introduction', component: 'page-intro' },
      { path: '/about-styles', component: 'page-about-styles' },
      {
        path: '(.*)',
        redirect: '/',
        action: () => {
          this.activeTab = 'page-intro';
        },
      },
    ]);
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
