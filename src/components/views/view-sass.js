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

import '../samples/sample-config-gutters';
import '../samples/sample-config-flexiplier';
import '../samples/sample-config-breakpoints';

class ViewSass extends PageViewElement {
  render() {
    return html`
      ${StylesKemet}
      ${StylesShared}
      <section>
        <p>Kemet comes with several variables that allow you to customize the behavior of the library. You can view these variables in <a href="https://github.com/hasanirogers/kemet-scss/blob/master/dist/scss/_config.scss">Kemet's config file</a>.</p>
        <h2>Gutters</h2>
        <p>You can control how gutters behave with the <code>$gutters</code> variables. <code>$gutters</code> is a sass map. You can change the values for the map. For example you might want to use <code>px</code> instead of <code>rem</code> for the units on the gutters. You can also change how gutters are refrenced by chaning the map's key. So instead of <code>minus-1</code> you might want to change it to simply <code>small</code>. Kemet is smart enough to loop through the map so you can also add or remove any key value you pairs as you wish. Here's an example of a custom <code>$gutters</code> config.</p>
        <sample-config-gutters></sample-config-gutters>
        <p>In the example above we changed the keys, values, and number of entries in the map to our custom needs. The only rule is do not remove default.</p>

        <h2>Flexiplier</h2>
        <p>The <code>$flexiplier</code> controls increments of spacing. The default is tens. You may also use fives or twenties. So for example, if you set it to five you can use increments of 5 in your breakpoints.<p>
        <sample-config-flexiplier></sample-config-flexiplier>
        <p>In the example above we are able to use <code>breakpoint="tiny-15"</code> because our flexliplier is at <code>fives</code>. We could also use 20, 25, 30, 35, etc since we're incrementing by 5.</p>

        <h2>Stack Point</h2>
        <p>The <code>$stackpoint</code> is the point at which the library considers your layout to go from "mobile" to "full". The attribute <code>autostack</code> relies on this. The default is set to <code>640px</code>.

        <h2>Breakpoints</h2>
        <p>This is a map that controls both how many and what sizes your breakpoints are. You can key/value pairs to the breakpoints as necessary. So for example, if we wanted to simplify the default config we could add the following:</p>
        <sample-config-breakpoints></sample-config-breakpoints>
        <p>We don't recommend such a configuration, but it's possible to achieve. Notice mobile starts at 0px. This is because the media queries are all mobile first and use <code>min-width</code>. So, in this example, mobile starts at 0, tablets starts at 768, and desktop at 1024.</p>
        <p>It should also be noted that the breakpoints used the <code>order</code> attribute are determined by this as well.</p>

        <h2>Break Ranges</h2>
        <p>These are specifically for the visibility classes and logically should be consistent with your breakpoints.</code>

        <h2>Order</h2>
        <p>Determines the depth of priority that can be set for the order attribute where depth is defined as a number. The default is 5 so giving an order of <code>order="small-minus-5"</code> would mean the highest priority, starting at small.</p>

        <h2>Flexgrid Columns</h2>
        <p>Use of <code>$flexgridcolumn</code> is specifically for using <code>basis</code> with flexgrid. It simply sets the number of columns. Default is 12.</p>

        <h2>Type Sizers</h2>
        <p>Similar to <code>$gutters</code>, <code>$typesizers</code> allows you to control how sizing for the type utility. The defaults are similar to gutters but can be customized in the same fashion as well.</p>

        <h2>Spacers</h2>
        <p>Controls the amount of spacing used for margin helper classes.</p>

        <h2>Make Order</h2>
        <p>If you want to reduce file size and don't need the order attribute, set <code>$makeorder</code> to false.

        <h2>Make Visibility</h2>
        <p>If you want to reduce file size and don't need the visibility classes, set <code>$makevisibility</code> to false.

        <h2>Make Text</h2>
        <p>If you want to reduce file size and don't need text helper classes, set <code>$maketext</code> to false.

        <h2>Make Spacers</h2>
        <p>If you're not concerned about increasing file size and want responsive margin classes, set <code>$makespacers</code> to true.</p>
      </section>
    `;
  }
}

window.customElements.define('view-sass', ViewSass);
