/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

import { StylesShared } from './styles/shared.js';
import { StylesApp } from './styles/app.js';
import { menuIcon } from './kemet-icons.js';
import { anubis } from './kemet-icons.js';
import './snack-bar.js';

class KemetPWA extends LitElement {
  render() {
    const {appTitle, _page, _drawerOpened, _snackbarOpened, _offline} = this;

    // Anything that's related to rendering should be done in here.
    return html`
    ${StylesShared}
    ${StylesApp}

    <!-- Header -->
    <app-header condenses reveals effects="waterfall">
      <app-toolbar class="toolbar-top">
        <button class="menu-btn" title="Menu" @click="${_ => this._updateDrawerState(true)}">${menuIcon}</button>
        <div>
          ${anubis}
          <h1 main-title>Kemet</h1>
          <p>The most advanced flex-based layout system on the web.</p>
        </div>
      </app-toolbar>

      <!-- This gets hidden on a small screen-->
      <nav class="toolbar-list">
        <a ?selected="${_page === 'app/home'}" href="/app/home">Getting Started</a>
        <a ?selected="${_page === 'app/layout'}" href="/app/layout">Layout</a>
        <a ?selected="${_page === 'app/utilities'}" href="/app/utilities">Utilities</a>
        <a ?selected="${_page === 'app/sass'}" href="/app/sass">Sass</a>
        <a ?selected="${_page === 'app/templates'}" href="/app/templates">Templates</a>
      </nav>
    </app-header>

    <!-- Drawer content -->
    <app-drawer .opened="${_drawerOpened}"
        @opened-changed="${e => this._updateDrawerState(e.target.opened)}">
      <nav class="drawer-list">
        <a ?selected="${_page === 'app/home'}" href="/app/home">Getting Started</a>
        <a ?selected="${_page === 'app/layout'}" href="/app/layout">Layout</a>
        <a ?selected="${_page === 'app/utilities'}" href="/app/utilities">Utilities</a>
        <a ?selected="${_page === 'app/sass'}" href="/app/sass">Sass</a>
        <a ?selected="${_page === 'app/templates'}" href="/app/templates">Templates</a>
      </nav>
    </app-drawer>

    <!-- Main content -->
    <main role="main">
      <view-home class="page" ?active="${_page === 'app/home'}"></view-home>
      <view-layout class="page" ?active="${_page === 'app/layout'}"></view-layout>
      <view-utilities class="page" ?active="${_page === 'app/utilities'}"></view-utilities>
      <view-sass class="page" ?active="${_page === 'app/sass'}"></view-sass>
      <view-templates class="page" ?active="${_page === 'app/templates'}"></view-templates>
      <view-components class="page" ?active="${_page === 'app/components'}"></view-components>
      <view-error class="page" ?active="${_page === 'app/error'}"></view-error>
    </main>

    <footer>
      <p>Made with &hearts; by <a href="http://hasanirogers.me">Hasani Rogers</a>.</p>
    </footer>

    <snack-bar ?active="${_snackbarOpened}">
        You are now ${_offline ? 'offline' : 'online'}.</snack-bar>
    `;
  }

  static get properties() {
    return {
      appTitle: { type: String },
      _page: { type: String },
      _drawerOpened: { type: Boolean },
      _snackbarOpened: { type: Boolean },
      _offline: { type: Boolean }
    }
  }

  constructor() {
    super();
    this._drawerOpened = false;
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  firstUpdated() {
    installRouter((location) => this._locationChanged(location));
    installOfflineWatcher((offline) => this._offlineChanged(offline));
    installMediaQueryWatcher(`(min-width: 640px)`,
        (matches) => this._layoutChanged(matches));
  }

  updated(changedProps) {
    if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' | ' + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle
        // This object also takes an image property, that points to an img src.
      });
    }
  }

  _layoutChanged(isWideLayout) {
    // The drawer doesn't make sense in a wide layout, so if it's opened, close it.
    this._updateDrawerState(false);
  }

  _offlineChanged(offline) {
    const previousOffline = this._offline;
    this._offline = offline;

    // Don't show the snackbar on the first load of the page.
    if (previousOffline === undefined) {
      return;
    }

    clearTimeout(this.__snackbarTimer);
    this._snackbarOpened = true;
    this.__snackbarTimer = setTimeout(() => { this._snackbarOpened = false }, 3000);
  }

  _locationChanged() {
    const path = window.decodeURIComponent(window.location.pathname);
    const page = path === '/' ? 'app/home' : path.slice(1);
    this._loadPage(page);
    // Any other info you might want to extract from the path (like page type),
    // you can do here.

    // Close the drawer - in case the *path* change came from a link in the drawer.
    this._updateDrawerState(false);
  }

  _updateDrawerState(opened) {
    if (opened !== this._drawerOpened) {
      this._drawerOpened = opened;
    }
  }

  _loadPage(page) {
    switch(page) {
      case 'app/home':
        import('./views/view-home.js').then((module) => {
          // Put code in here that you want to run every time when
          // navigating to view1 after my-view1.js is loaded.
        });
        break;
      case 'app/layout':
        import('./views/view-layout.js');
        break;
      case 'app/utilities':
        import('./views/view-utilities.js');
        break;
      case 'app/sass':
        import('./views/view-sass.js');
        break;
      case 'app/templates':
        import('./views/view-templates.js');
        break;
      case 'app/components':
        import('./views/view-components.js');
        break;
      default:
        page = 'error';
        import('./views/view-error.js');
    }

    this._page = page;
  }
}

window.customElements.define('kemet-pwa', KemetPWA);
