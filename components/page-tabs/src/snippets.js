import { html } from 'lit-element';

export const snippetImport = html
`import '@kemet/kemet-tabs/kemet-tabs.js';
import '@kemet/kemet-tabs/kemet-tab.js';
import '@kemet/kemet-tabs/kemet-tab-panel.js';`;

export const snippetMarkupSelected = html
`&lt;kemet-tabs selected="one"&gt;
  &lt;nav slot="links"&gt;
    &lt;kemet-tab link="one"&gt;One&lt;/kemet-tab&gt;
    &lt;kemet-tab link="two"&gt;Two&lt;/kemet-tab&gt;
    &lt;kemet-tab link="three"&gt;Three&lt;/kemet-tab&gt;
  &lt;/nav&gt;
  &lt;section slot="panels"&gt;
    &lt;kemet-tab-panel panel="one"&gt;Panel One&lt;/kemet-tab-panel&gt;
    &lt;kemet-tab-panel panel="two"&gt;Panel Two&lt;/kemet-tab-panel&gt;
    &lt;kemet-tab-panel panel="three"&gt;Panel Three&lt;/kemet-tab-panel&gt;
  &lt;/section&gt;
&lt;/kemet-tabs&gt;`;

export const snippetMarkupIndex = html
`&lt;kemet-tabs&gt;
  &lt;nav slot="links"&gt;
    &lt;kemet-tab&gt;One&lt;/kemet-tab&gt;
    &lt;kemet-tab&gt;Two&lt;/kemet-tab&gt;
    &lt;kemet-tab&gt;Three&lt;/kemet-tab&gt;
  &lt;/nav&gt;
  &lt;section slot="panels"&gt;
    &lt;kemet-tab-panel&gt;Panel One&lt;/kemet-tab-panel&gt;
    &lt;kemet-tab-panel&gt;Panel Two&lt;/kemet-tab-panel&gt;
    &lt;kemet-tab-panel&gt;Panel Three&lt;/kemet-tab-panel&gt;
  &lt;/section&gt;
&lt;/kemet-tabs&gt;`;
