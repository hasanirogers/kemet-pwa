import {html, PolymerElement} from '/node_modules/@polymer/polymer/polymer-element.js';
import '/node_modules/@webcomponents/shadycss/entrypoints/apply-shim.js';

import './dummy-input.js';
import './dummy-button.js';


class DummyLogin extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: 1rem;
          height: 100%;
          box-sizing: border-box;
          border: 1px solid #ddd;
        }
        dummy-button {
          margin-top: 1rem;
        }
      </style>
      <dummy-input label="Find Your Dream Planet"></dummy-input>
      <dummy-input label="Number of Moons"></dummy-input>
      <dummy-button raised>Search Now</paper-dummy-button>
    `;
  }

  static get properties() {
    return {
      label: {
        type: String
      }
    }
  }
} // class

window.customElements.define('dummy-login', DummyLogin);
