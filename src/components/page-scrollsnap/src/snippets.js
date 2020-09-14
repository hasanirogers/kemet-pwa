import { html } from 'lit-element';

export const snippetImport = html
`import '@kemet/kemet-scroll-snap/kemet-scroll-snap.js';
import '@kemet/kemet-scroll-snap/kemet-scroll-snap-slide.js';
import '@kemet/kemet-scroll-snap/kemet-scroll-snap-paginator.js'; // optional`

export const snippetMarkup = html
`&lt;kemet-scroll-snap&gt;
  &lt;div slot="slides"&gt;
    &lt;kemet-scroll-snap-slide&gt;[your content]&lt;/kemet-scroll-snap-slide&gt;
    &lt;kemet-scroll-snap-slide&gt;[your content]&lt;/kemet-scroll-snap-slide&gt;
    &lt;kemet-scroll-snap-slide&gt;[your content]&lt;/kemet-scroll-snap-slide&gt;
  &lt;/div&gt;
  &lt;div slot="pagination"&gt;
    &lt;kemet-scroll-snap-paginator&gt;&lt;/kemet-scroll-snap-paginator&gt;
  &lt;/div&gt;
&lt;/kemet-scroll-snap&gt;`;
