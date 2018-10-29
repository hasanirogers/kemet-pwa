import {html, PolymerElement} from '/node_modules/@polymer/polymer/polymer-element.js';

class DummyButton extends PolymerElement {
  static get template() {
    return html`
        <style>
          :host {
            color: #f8f8f8;
            display: inline-block;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            background: #0060ff;
          }
        </style>
        <slot></slot>
    `;
  }

  static get properties() {
    return {
      label: {
        type: String
      }
    }
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }
} // class

window.customElements.define('dummy-button', DummyButton);
