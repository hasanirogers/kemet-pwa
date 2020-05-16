import { html, css, LitElement } from 'lit-element';
import { switchRoute } from '../../../utilities/switchRoute.js';
import { stylesBase, stylesRSCSS } from '../../../assets/styles.js';

import {
  svgAnubis,
  svgStyles,
  svgComponents,
  svgTemplates,
} from '../../../assets/svg.js';


export class PageIntro extends LitElement {
  static get styles() {
    return [
      stylesBase,
      stylesRSCSS,
      css`
        :host {
          text-align: center;
        }

        header {
          height: var(--app-header-height);
        }

        header svg {
          margin: auto;
          fill: var(--app-white-rich);
          width: calc(var(--app-header-height) - 100px);
          height: calc(var(--app-header-height) - 100px);
        }

        header > div {
          display: flex;
          width: 120%;
          height: var(--app-header-height);
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          background: var(--app-primary-color);
          border-bottom-left-radius: 100% 40%;
          border-bottom-right-radius: 100% 40%;
        }

        aside p {
          margin: 0;
        }

        h1 {
          margin-bottom: 0.5rem;
        }

        h1 span {
          color: var(--app-black-25);
        }

        h2 {
          margin: 0 0 1rem 0;
        }

        section {
          padding: 0 1rem;
        }

        .features > div {
          margin-bottom: 4rem;
        }

        .designless {
          max-width: 960px;
        }

        .designless > p {
          margin: auto;
          max-width: 960px
        }

        .designless svg,
        .features svg {
          width: 100%;
          max-width: 240px;
        }

        .designless,
        .features {
          margin: 4rem auto;
          padding: 0 1rem;
        }

        @media screen and (min-width: 768px) {
          .features {
            max-width: 1280px;
            display: grid;
            grid-gap: 1rem;
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `
    ];
  }

  render() {
    return html`
      <header>
        <div>
          ${svgAnubis}
        </div>
      </header>

      <section>
        <h1>Kemet Design<span>{</span>less<span>}</span> System</h1>
        <aside>
          <p>Introducing the world's first designless system to the web.</p>
        </aside>
      </section>

      <section class="designless">
        <h2>Designless?</h2>
        <p>Design System are great. They give us the ability to take components and reuse them for a consistent look and feel acorss multiple projects using different technologies. However, what if you wanted to use the same components across different looks and feels? Enter Kemet Designless System. Designless means our system gives you raw behavior without the design. Take the system and design it however you want! Kemet is designed to be a blueprint for you to design on top of.</p>
      </section>

      <section class="features">
        <div>
          <h2>Styles</h2>
          ${svgStyles}
          <p>Kemet gives you a powerful layout system that's fully customizable.</p>
          <a class="standard-btn" @click=${() => switchRoute('styles')}>Learn More</a>
        </div>
        <div>
          <h2>Components</h2>
          ${svgComponents}
          <p>Kemet components are fully stylable by you for a custom look and feel.</p>
          <a class="standard-btn" @click=${() => switchRoute('components')}>Learn More</a>
        </div>
        <div>
          <h2>Templates</h2>
          ${svgTemplates}
          <p>Kemet templates get you up and running full speed with concrete examples.</p>
          <a class="standard-btn" @click=${() => switchRoute('templates')}>Learn More</a>
        </div>
      </section>
    `;
  }
}
