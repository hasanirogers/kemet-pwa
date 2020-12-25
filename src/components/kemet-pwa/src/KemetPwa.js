/* eslint-disable no-restricted-globals */
import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';
import { stylesBase, stylesKemetDrawer, stylesRSCSS } from '../../../assets/styles.js';
import { svgHamburger } from '../../../assets/svg.js';
import { versions } from './versions.js';

import '@kemet/kemet-drawer/kemet-drawer';

import '../../kemet-nav/kemet-nav.js';
import '../../kemet-btn/kemet-btn.js';

import '../../page-intro/page-intro.js';
import '../../page-styles/page-styles.js';
import '../../page-layout/page-layout.js';
import '../../page-utilities/page-utilities.js';
import '../../page-sass/page-sass.js';

import '../../page-components/page-components.js';
import '../../page-drawer/page-drawer.js';
import '../../page-tabs/page-tabs.js';
import '../../page-accordion/page-accordion.js';
import '../../page-modal/page-modal.js';
import '../../page-carousel/page-carousel.js';
import '../../page-scrollsnap/page-scrollsnap.js';
import '../../page-scrolllink/page-scrolllink.js';
import '../../page-draggable/page-draggable.js';
import '../../page-flipcard/page-flipcard.js';
import '../../page-rotator/page-rotator.js';
import '../../page-popover/page-popover.js';
import '../../page-ratio/page-ratio.js';

import '../../page-templates/page-templates.js';
import '../../page-agency/page-agency.js';
import '../../page-ecommerce/page-ecommerce.js';
import '../../page-news/page-news.js';
import '../../page-travel/page-travel.js';

export class KemetPwa extends LitElement {
  static get styles() {
    return [
      stylesBase,
      stylesRSCSS,
      stylesKemetDrawer,
      css`
        .hamburger {
          display: block;
          position: fixed;
          top: 0;
          margin: 0.5rem;
        }

        .hamburger svg {
          width: 32px;
          height: 32px;
        }

        @media screen and (min-width: 768px) {
          .hamburger {
            display: none;
          }
        }

        [data-outlet] > .leaving {
          animation: 300ms fadeOut ease-in-out;
        }

        [data-outlet] > .entering {
          animation: 300ms fadeIn linear;
        }

        @keyframes fadeOut {
          from {opacity: 1;}
          to {opacity: 0;}
        }

        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }
      `,
    ];
  }

  firstUpdated() {
    this.drawer = this.shadowRoot.querySelector('kemet-drawer');
    const router = new Router(this.shadowRoot.querySelector('[data-outlet]'));

    router.setRoutes([{
      path: '/',
      animate: true,
      children: [
        { path: '/', component: 'page-intro' },
        { path: '/introduction', component: 'page-intro' },
        { path: '/styles', component: 'page-styles' },
        { path: '/layout', component: 'page-layout' },
        { path: '/utilities', component: 'page-utilities' },
        { path: '/sass', component: 'page-sass' },
        { path: '/components', component: 'page-components' },
        { path: '/drawer', component: 'page-drawer' },
        { path: '/tabs', component: 'page-tabs' },
        { path: '/accordion', component: 'page-accordion' },
        { path: '/modal', component: 'page-modal' },
        { path: '/carousel', component: 'page-carousel' },
        { path: '/scrollsnap', component: 'page-scrollsnap' },
        { path: '/scrolllink', component: 'page-scrolllink' },
        { path: '/draggable', component: 'page-draggable' },
        { path: '/flipcard', component: 'page-flipcard' },
        { path: '/rotator', component: 'page-rotator' },
        { path: '/popover', component: 'page-popover' },
        { path: '/ratio', component: 'page-ratio' },
        { path: '/templates', component: 'page-templates' },
        { path: '/agency', component: 'page-agency' },
        { path: '/ecommerce', component: 'page-ecommerce'},
        { path: '/news', component: 'page-news' },
        { path: '/travel', component: 'page-travel' },
        { path: '(.*)', redirect: '/' },
      ]
    }]);
  }

  render() {
    return html`
      <link href="https://unpkg.com/@kemet/kemet-styles@latest/dist/kemet.components.css" rel="stylesheet" type="text/css">

      <kemet-drawer effect="scale">
        <nav class="site-nav" slot="navigation">
          <kemet-nav></kemet-nav>
        </nav>
        <section slot="content">
          <a class="hamburger" @click=${this.toggleDrawer}>
            ${svgHamburger}
          </a>

          <main data-outlet></main>
        </section>
      </kemet-drawer>

      <kemet-nav content></kemet-nav>

      <kemet-modal id="has-effect" effect="fadein-scaleup">
        <div class="content">
          <h2>This modal has an effect. 😊</h2>
          <p>Bacon ipsum dolor amet doner turkey turducken boudin. Kevin salami ground round, frankfurter brisket tri-tip hamburger beef alcatra sirloin venison pastrami turducken. Strip steak ball tip pig swine burgdoggen sausage t-bone doner leberkas pork ham alcatra pork belly. Turducken corned beef rump chicken pancetta doner sirloin tail. Tenderloin ground round salami short ribs, bresaola andouille beef ribs tri-tip pastrami turkey ribeye ham fatback.</p>
          <kemet-modal-close>
            <kemet-btn>Close Me</kemet-btn>
          </kemet-modal-close>
        </div>
      </kemet-modal>

      <kemet-modal id="no-effect">
        <div class="content">
          <h2>This modal has no effect. 😔</h2>
          <p>Bacon ipsum dolor amet doner turkey turducken boudin. Kevin salami ground round, frankfurter brisket tri-tip hamburger beef alcatra sirloin venison pastrami turducken. Strip steak ball tip pig swine burgdoggen sausage t-bone doner leberkas pork ham alcatra pork belly. Turducken corned beef rump chicken pancetta doner sirloin tail. Tenderloin ground round salami short ribs, bresaola andouille beef ribs tri-tip pastrami turkey ribeye ham fatback.</p>
          <kemet-modal-close>
            <kemet-btn>Close Me</kemet-btn>
          </kemet-modal-close>
        </div>
      </kemet-modal>

      <kemet-modal id="no-close-btn" closeOnClick>
        <div class="content">
          <p>Bacon ipsum dolor amet doner turkey turducken boudin. Kevin salami ground round, frankfurter brisket tri-tip hamburger beef alcatra sirloin venison pastrami turducken. Strip steak ball tip pig swine burgdoggen sausage t-bone doner leberkas pork ham alcatra pork belly. Turducken corned beef rump chicken pancetta doner sirloin tail. Tenderloin ground round salami short ribs, bresaola andouille beef ribs tri-tip pastrami turkey ribeye ham fatback.</p>
        </div>
      </kemet-modal>
    `;
  }

  toggleDrawer() {
    this.drawer.toggle();
  }
}
