/* eslint-disable no-restricted-globals */
import { html, css, LitElement } from 'lit-element';
import { stylesBase } from '../../../assets/styles.js';

export class KemetBtn extends LitElement {
  static get properties() {
    return {
      href: {
        type: String,
      },

      target: {
        type: String,
      }
    };
  }

  static get styles() {
    return [
      stylesBase,
      css`
        :host {
          display: inline-block;
          background: var(--app-primary-color);
          transition: filter 300ms ease, color 300ms ease;
        }

        :host(:hover) {
          filter: brightness(150%);
        }

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: var(--app-white-rich) !important;
        }
      `,
    ];
  }

  constructor() {
    super();

    this.target = '_self';
  }

  render() {
    if(this.href) {
      return html`
        <a href=${this.href} target=${this.target}>
          <slot></slot>
        </a>
      `;
    }

    return html`
      <a target=${this.target}>
        <slot></slot>
      </a>
    `;
  }
}
