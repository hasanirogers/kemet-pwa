/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from '../helpers/page-view-element.js';

import { StylesKemet } from '../styles/kemet.js'
import { StylesShared } from '../styles/shared.js';

import '../structure/template-block';

class ViewTemplates extends PageViewElement {
  static get properties() { return {
    _templateData: { type: Array },
  }};

  constructor() {
    super();
    this._templateData = [];
  }

  connectedCallback() {
    this._fetchAppData(this);
  }

  render() {
    const _templates = this._templateData || [];
    let templateHTML;

    if (_templates.length > 0) {

      const templateBlocks = _templates.map((template) => {
        // map over _templates and return a template block for each template
        return html `<template-block slug="${template.slug}" header="${template.header}" desc="${template.desc}"></template-block>`
      });

      // wrap the template block in a flexgird
      templateHTML = html `
        <div layout="flexgrid" gutters="plus-6" basis="tiny-1-columns medium-2-columns large-3-columns">
          ${templateBlocks}
        </div>
      `
    } else {
      // if there are no templates, display a message
      templateHTML = html `<div>No templates were found.</div>`
    }

    return html`
      ${StylesKemet}
      ${StylesShared}
      <section>
        <p>Check out the power of Kemet in action with templates. These templates use Kemet's layout system in combination with dummy components. Use them to get a feel for making complex layouts with Kemet. Also note that Kemet doesn't try to act as a framework work. There are no page level styles included in Kemet. A <a href="/assets/css/templates.css" target="_blank">super basic style sheet</a> was created to give the templates page level structure. If you want to use these templates, be sure to account for these styles as well.</p>
        <h2>Templates</h2>
        ${templateHTML}
        <p class="text-minus-1">*Templates inspired by <a href="https://foundation.zurb.com/templates.html">Zurb Foundation</a>.</p>
      </section>
    `;
  }

  _fetchAppData(host) {
    fetch("/data/kemet")
      .then(response => response.text())
      .then(text => {
        try {
          const data = JSON.parse(text);
          host._templateData = data.templates;
        } catch (error) {
          host._templateData = [];
        }
      })
  }


}

window.customElements.define('view-templates', ViewTemplates);
