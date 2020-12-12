import { html } from 'lit-element';

export const snippetImport = html`import '@kemet/kemet-flipcard/kemet-flipcard.js';
import '@kemet/kemet-flipcard/kemet-flipcard-trigger.js'; // optional`;

export const snippetMarkup = html
`&lt;kemet-flipcard&gt;
  &lt;div slot="front"&gt;
    &lt;p&gt;This is the front of the card.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div slot="back"&gt;
    &lt;p&gt;This is the back of the card.&lt;/p&gt;
  &lt;/div&gt;
&lt;/kemet-flipcard&gt;`;

export const snippetFixedDimensions = html
`&lt;kemet-flipcard style="width:320px; height:240px;"&gt;
  &lt;div slot="front"&gt;
    &lt;p&gt;This card has a fixed height and width.&lt;/p&gt;
    &lt;kemet-flipcard-trigger&gt;
      &lt;button&gt;Flip Me&lt;/button&gt;
    &lt;/kemet-flipcard-trigger&gt;
  &lt;/div&gt;
  &lt;div slot="back"&gt;
    &lt;kemet-flipcard-trigger&gt;
      &lt;button&gt;Flip me back!&lt;/button&gt;
    &lt;/kemet-flipcard-trigger&gt;
  &lt;/div&gt;
&lt;/kemet-flipcard&gt;`;

export const snippetMeasuredHeight = html
`&lt;kemet-flipcard measure&gt;
  &lt;div slot="front"&gt;
    &lt;p&gt;This card will automatically adjust its height to match the tallest content.&lt;/p&gt;
    &lt;kemet-flipcard-trigger&gt;
      &lt;button&gt;Flip Me&lt;/button&gt;
    &lt;/kemet-flipcard-trigger&gt;
  &lt;/div&gt;
  &lt;kemet-flipcard-trigger slot="back" style="display:flex;"&gt;
    &lt;img src="https://placehold.it/1920x1080" alt="a placeholder" /&gt;
  &lt;/kemet-flipcard-trigger&gt;
&lt;/kemet-flipcard&gt;`;

export const snippetFlipOnHover = html
`&lt;kemet-flipcard measure flip-on-hover axis="vertical"&gt;
  &lt;div slot="front"&gt;
    &lt;p&gt;This card will flip on hover or focus.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div slot="back"&gt;
    &lt;p&gt;It also flips vertically.&lt;/p&gt;
  &lt;/div&gt;
&lt;/kemet-flipcard&gt;`;

