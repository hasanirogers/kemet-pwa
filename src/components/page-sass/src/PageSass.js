import { html, css, LitElement } from 'lit-element';
import { stylesBase } from '../../../assets/styles.js';
import { sampleGutters, sampleFlexiplier, sampleBreakpoints } from './templateSamples.js';
import { identifyPageGroup } from '../../../utilities/identifyPageGroup.js';

export class PageSass extends LitElement {
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
    this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
      window.hljs.highlightBlock(block);
    });

    identifyPageGroup('styles');
  }

  render() {
    return html`
      <link href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/styles/vs2015.min.css" rel="stylesheet" type="text/css"/>
      <article>
        <h1>Sass Config</h1>
        <section>
        <p>Kemet comes with several variables that allow you to customize the behavior of the library. You can view these variables in <a href="https://github.com/hasanirogers/kemet-styles/blob/master/src/scss/library/_config.scss" target="_blank">Kemet's config file</a>.</p>

        <h2>Gutters</h2>
        <p>You can control how gutters behave with the <code>$gutters</code> variables. <code>$gutters</code> is a sass map. You can change the values for the map. For example you might want to use <code>px</code> instead of <code>rem</code> for the units on the gutters. You can also change how gutters are refrenced by chaning the map's key. So instead of <code>minus-1</code> you might want to change it to simply <code>small</code>. Kemet is smart enough to loop through the map so you can also add or remove any key value you pairs as you wish. Here's an example of a custom <code>$gutters</code> config.</p>
        <pre><code>${sampleGutters}</code></pre>
        <p>In the example above we changed the keys, values, and number of entries in the map to our custom needs. The only rule is do not remove default.</p>

        <h2>Flexiplier</h2>
        <p>The <code>$flexiplier</code> controls increments of spacing. The default is tens. You may also use fives or twenties. So for example, if you set it to five you can use increments of 5 in your breakpoints.</p>
        <pre><code>${sampleFlexiplier}</code></pre>
        <p>In the example above we are able to use <code>breakpoint="tiny-15"</code> because our flexliplier is at <code>fives</code>. We could also use 20, 25, 30, 35, etc since we're incrementing by 5.</p>

        <h2>Stack Point</h2>
        <p>The <code>$stackpoint</code> is the point at which the library considers your layout to go from "mobile" to "full". The attribute <code>autostack</code> relies on this. The default is set to <code>640px</code>.

        <h2>Breakpoints</h2>
        <p>This is a map that controls both how many and what sizes your breakpoints are. You can key/value pairs to the breakpoints as necessary. So for example, if we wanted to simplify the default config we could add the following:</p>
        <pre><code>${sampleBreakpoints}</code></pre>
        <p>We don't recommend such a configuration, but it's possible to achieve. Notice mobile starts at 0px. This is because the media queries are all mobile first and use <code>min-width</code>. So, in this example, mobile starts at 0, tablets starts at 768, and desktop at 1024.</p>
        <p>It should also be noted that the breakpoints used the <code>order</code> attribute are determined by this as well.</p>

        <h2>Break Ranges</h2>
        <p>These are specifically for the visibility classes and logically should be consistent with your breakpoints.</p>

        <h2>Order</h2>
        <p>Determines the depth of priority that can be set for the order attribute where depth is defined as a number. The default is 5 so giving an order of <code>order="small-minus-5"</code> would mean the highest priority, starting at small.</p>

        <h2>Flexgrid Columns</h2>
        <p>Use of <code>$flexgridcolumn</code> is specifically for using <code>basis</code> with flexgrid. It simply sets the number of columns. Default is 12.</p>

        <h2>Type Sizers</h2>
        <p>Similar to <code>$gutters</code>, <code>$typesizers</code> allows you to control how sizing for the type utility. The defaults are similar to gutters but can be customized in the same fashion as well.</p>

        <h2>Spacers</h2>
        <p>Controls the amount of spacing used for margin helper classes.</p>

        <h2>Make Order</h2>
        <p>If you want to reduce file size and don't need the order attribute, set <code>$makeorder</code> to false.</p>

        <h2>Make Visibility</h2>
        <p>If you want to reduce file size and don't need the visibility classes, set <code>$makevisibility</code> to false.</p>

        <h2>Make Text</h2>
        <p>If you want to reduce file size and don't need text helper classes, set <code>$maketext</code> to false.</p>

        <h2>Make Spacers</h2>
        <p>If you want to reduce file size and don't need spacers, set <code>$makespacers</code> to false.</p>
      </section>
      </article>
    `;
  }
}
