import {html, PolymerElement} from '/node_modules/@polymer/polymer/polymer-element.js';
import '/node_modules/@webcomponents/shadycss/entrypoints/apply-shim.js';

import './dummy-element.js';


class DummyTravel extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: 1rem;
          border: 1px solid #ddd;
        }
        dummy-element {
          display: block;
          width: 100%;
          height: 370px;
          background: #ccc;
        }
      </style>
      <dummy-element label="[[label]]"></dummy-element>
      <slot id="caption" name="caption"></slot>
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

window.customElements.define('dummy-travel', DummyTravel);
