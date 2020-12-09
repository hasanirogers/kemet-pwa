import { html, css, LitElement } from 'lit-element';
import { stylesBase } from '../../../assets/styles.js';
import { versions } from '../../kemet-pwa/src/versions.js';
import { identifyPageGroup } from '../../../utilities/identifyPageGroup.js';

export class PageUtilities extends LitElement {
  static get styles() {
    return [
      stylesBase,
      css`
        :host {
          display: block;
        }
    `
    ];
  }

  firstUpdated() {
    identifyPageGroup('styles');
  }

  render() {
    return html`
      <link href="https://unpkg.com/@kemet/kemet-styles@latest/dist/kemet.utilities.css" rel="stylesheet" type="text/css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${versions.highlightjs}/styles/vs2015.min.css" rel="stylesheet" type="text/css"/>
      <article>
        <section>
          <h2>Utility Classes</h2>
          <p>Kemet comes with some utility classes that assist with structural styling.</p>
          <h3>Visibility</h3>
          <p>Visibility classes either show or hide elements at the given breakpoints. Showing an element means making a element that's hidden by default display. Hidding an element means making a element that's visible by default hide. You can also specify what breakpoint the element should show or hide. Visibility classes are the only styles in Kemet that are not mobile first.</p>
          <p>The syntax is <code>[show|hide]-[breakpoint]-[direction]</code>. So for example if you want to show an element at medium only you would write <code>show-medium</code>. If you wanted to hide an element on anything medium and bigger you would write <code>hide-medium-up</code>.</p>
          <div>
            <h4>Visibility: Show Classes</h4>
            <p class="box show-medium" style="display:none;">
              <code>.show-medium</code>
              This will only show only on medium.
            </p>
            <p class="box show-medium-up" style="display:none;">
              <code>.show-medium-up</code>
              This will show on medium and larger breakpoints.
            </p>
            <p class="box show-medium-down" style="display:none;">
              <code>.show-medium-down</code>
              This will show on medium and smaller breakpoints.
            </p>
          </div>
          <div>
            <h4>Visibility: Hide Classes</h4>
            <p class="box hide-medium">
              <code>.hide-medium</code>
              This will hide only on medium.
            </p>
            <p class="box hide-medium-up">
              <code>.hide-medium-up</code>
              This will hide on medium and larger breakpoints.
            </p>
            <p class="box hide-medium-down">
              <code>.hide-medium-up</code>
              This will hide on medium and smaller breakpoints.</p>
          </div>
          <h3>Text classes</h3>
          <p>While making template you'll want to control the attributes about text without having to clutter your template level code. So, kemet comes with some text helpers that allow you to achieve this.</p>
          <h4>Alignment Helpers</h4>
          <p>You can control text alignment with the following classes. They are self explanatory.</p>
          <div layout="flexlist" gutters>
            <div><code>.text-left</code></div>
            <div><code>.text-center</code></div>
            <div><code>.text-right</code></div>
          </div>
          <h4>Font Sizers</h4>
          <p>In large applications you want to decouple the size of your text with your h1s, h2s, etc. You also don't want to control the text on a template level. Because of this kemet comes with size helpers which are configurable with sass.</p>
          <div layout="flexgrid" gutters basis="medium-2-columns">
            <div><code class="text-plus-6">.text-plus-6</code></div>
            <div><code class="text-plus-5">.text-plus-5</code></div>
            <div><code class="text-plus-4">.text-plus-4</code></div>
            <div><code class="text-plus-3">.text-plus-3</code></div>
            <div><code class="text-plus-2">.text-plus-2</code></div>
            <div><code class="text-plus-1">.text-plus-1</code></div>
            <div><code class="text-base">.text-base</code></div>
            <div><code class="text-minus-1">.text-minus-1</code></div>
            <div><code class="text-minus-2">.text-minus-2</code></div>
            <div><code class="text-minus-3">.text-minus-3</code></div>
          </div>
          <h3>Spacer classes</h3>
          <p>Kemet comes with a number of responsive margin classes for you to control spacing. The syntax is <code>margin-[breakpoint]-[size]-[side]</code> where side (top,left,bottom,right) is optional.</p>
          <div class="margin-tiny-largest-left">
            <div>This will have a left margin of largest for all breakpoints.</div>
            <code>.margin-tiny-largest-left</code>
          </div>
          <div class="margin-small-normal margin-medium-none margin-large-largest">
            <div>This will have responsive margins of normal at small, none at medium, and large at largest.</div>
            <code>.margin-small-normal margin-medium-none margin-large-largest</code>
          </div>
        </section>
      </article>
    `;
  }
}
