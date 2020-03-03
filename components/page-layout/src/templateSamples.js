import { html } from 'lit-element';

export const sampleFlexlayout1 = html`&lt;div layout="flexrow"&gt;
  &lt;div&gt;&lt;span class="box"&gt;Item 1&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Item 2&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Item 3&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Item 4&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;`;

export const sampleFlexlayout2 = html`&lt;div layout="flexrow" autostack gutters&gt;
  &lt;div&gt;&lt;span class="box"&gt;Item 1&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Item 2&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Item 3&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Item 4&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;`;
