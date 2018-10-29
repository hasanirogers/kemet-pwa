import {html, PolymerElement} from '/node_modules/@polymer/polymer/polymer-element.js';

class DummyElement extends PolymerElement {
  static get template() {
    return html`
        <style>
          :host {
            display: block;
            width: 100%;
            position: relative;
            background: #ccc;
          }
          h1 {
            margin: 0;
            padding: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
        </style>
        <h1>[[label]]</h1>
    `;
  }

  static get properties() {
    return {
      label: {
        type: String
      },
      height: {
        type: String,
        value: '150px'
      }
    }
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    if (typeof this.height == 'string') this.style.height = this.height;
  }
} // class

window.customElements.define('dummy-element', DummyElement);
