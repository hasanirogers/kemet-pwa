import {html, PolymerElement} from '/node_modules/@polymer/polymer/polymer-element.js';

class DummyList extends PolymerElement {
  static get template() {
    return html`
        <style>
          ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }

          ::slotted(li) {
            margin: 1rem 0;
          }

          :host([taglist]) ul {
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;

            width: auto;
            margin: 0px;
            padding: 0px;
            list-style: none;
            -webkit-padding-start: 0;
          }

          :host([taglist]) ::slotted(li) {
            color: white;
            margin: 6px 6px 0 0;
            padding: 4px 8px;
            background: rgba(0,0,0,0.5);

            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
          }
        </style>
        <ul>
          <slot></slot>
        </ul>
    `;
  }

  static get properties() {
    return {
      taglist: {
        type: Boolean
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

window.customElements.define('dummy-list', DummyList);
