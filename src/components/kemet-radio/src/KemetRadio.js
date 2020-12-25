/* eslint-disable no-restricted-globals */
import { html, css, LitElement } from 'lit-element';

export class KemetRadio extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
      },

      value: {
        type: String,
      },

      checked: {
        type: Boolean,
        reflect: true
      },

      focused: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: inline-block;
        }

        :host([focused]) {
          outline-offset: 6px;
          outline: 2px solid var(--app-primary-color);
        }

        label {
          display: inline-block;
          position: relative;
          padding-left: 35px;
          cursor: pointer;
        }

        input {
          position: absolute;
          cursor: pointer;
          opacity: 0;
          height: 25px;
          width: 100%;
          top: 0px;
          left: 0px;
          z-index: 9;
        }

        .mark {
          position: absolute;
          top: 0;
          left: 0;
          height: 25px;
          width: 25px;
          background-color: #eee;
          border-radius: 50%;
        }

        label:hover .mark {
          background-color: #ccc;
        }

        :host([checked]) .mark {
          background-color: var(--app-primary-color);
        }

        .mark:after {
          content: "";
          position: absolute;
          display: none;
          top: 6.5px;
          left: 7px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: var(--app-white-rich);
        }

        :host([checked]) .mark:after {
          display: block;
        }
      `,
    ];
  }

  constructor() {
    super();

    this.focused = false;
  }

  render() {
    return html`
      <label>
        <slot></slot>
        <input
          type="radio"
          name="${this.name}"
          value="${this.value}"
          ?checked=${this.checked}
          @blur=${() => this.handleBlur()}
          @focus=${() => this.handleFocus()}
          @click=${() => this.handleClick()}
          @change=${(event) => this.handleChange(event)}
        />
        <span class="mark"></span>
      </label>
    `;
  }

  handleChange(event) {
    const form = this.closest('form') || document.body;

    form.querySelectorAll('kemet-radio').forEach((radio) => {
      // remove checked as a property of the element and the input
      radio.checked = false;
      radio.shadowRoot.querySelector('input').checked = false;
    });

    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      bubbles: true,
      detail: this,
    }))

    // add checked as a property of the element and the input
    this.shadowRoot.querySelector('input').checked = true;
    this.checked = event.target.checked;
  }

  handleFocus() {
    this.focused = true;
  }

  handleBlur() {
    this.focused = false;
  }

  handleClick() {
    this.checked = !this.checked;
  }
}
