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
        a {
          position: relative;
          display: inline-block;
          padding: 1rem;
          text-decoration: none;
          color: var(--app-white-rich) !important;
          background: var(--app-primary-color);
          transition: filter 300ms ease, color 300ms ease;
        }

        a:hover {
          filter: brightness(150%);
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
