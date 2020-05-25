import { html } from 'lit-element';

export const snippetImport = html
`import '@kemet/kemet-carousel/kemet-carousel.js';
import '@kemet/kemet-carousel/kemet-carousel-slide.js';
import '@kemet/kemet-carousel/kemet-carousel-link.js'; // optional
import '@kemet/kemet-carousel/kemet-carousel-next.js'; // optional
import '@kemet/kemet-carousel/kemet-carousel-prev.js'; // optional`;

export const snippetMarkup = html
`&lt;kemet-carousel&gt;
  &lt;div slot="slides"&gt;
    &lt;kemet-carousel-slide&gt;Slide One&lt;/kemet-carousel-slide&gt;
    &lt;kemet-carousel-slide&gt;Slide Two&lt;/kemet-carousel-slide&gt;
    &lt;kemet-carousel-slide&gt;Slide Three&lt;/kemet-carousel-slide&gt;
  &lt;/div&gt;
  &lt;div slot="pagination"&gt;
    &lt;kemet-carousel-prev&gt;Prev&lt;/kemet-carousel-prev&gt;
    &lt;kemet-carousel-link slide="0"&gt;1&lt;/kemet-carousel-link&gt;
    &lt;kemet-carousel-link slide="1"&gt;2&lt;/kemet-carousel-link&gt;
    &lt;kemet-carousel-link slide="2"&gt;3&lt;/kemet-carousel-link&gt;
    &lt;kemet-carousel-next&gt;Next&lt;/kemet-carousel-next&gt;
  &lt;/div&gt;
&lt;/kemet-carousel&gt;`;

export const snippetBasic = html
`&lt;kemet-carousel&gt;
  &lt;div slot="slides"&gt;
    &lt;kemet-carousel-slide&gt;Slide One&lt;/kemet-carousel-slide&gt;
    &lt;kemet-carousel-slide&gt;Slide Two&lt;/kemet-carousel-slide&gt;
    &lt;kemet-carousel-slide&gt;Slide Three&lt;/kemet-carousel-slide&gt;
  &lt;/div&gt;
  &lt;div slot="pagination"&gt;
    &lt;kemet-carousel-prev&gt;Prev&lt;/kemet-carousel-prev&gt;
    &lt;kemet-carousel-link slide="0"&gt;1&lt;/kemet-carousel-link&gt;
    &lt;kemet-carousel-link slide="1"&gt;2&lt;/kemet-carousel-link&gt;
    &lt;kemet-carousel-link slide="2"&gt;3&lt;/kemet-carousel-link&gt;
    &lt;kemet-carousel-next&gt;Next&lt;/kemet-carousel-next&gt;
  &lt;/div&gt;
&lt;/kemet-carousel&gt;`;

export const snippetPagination = html
`&lt;kemet-carousel pagination="top"&gt;
  &lt;div slot="slides"&gt;
    &lt;kemet-carousel-slide&gt;Slide One&lt;/kemet-carousel-slide&gt;
    &lt;kemet-carousel-slide&gt;Slide Two&lt;/kemet-carousel-slide&gt;
    &lt;kemet-carousel-slide&gt;Slide Three&lt;/kemet-carousel-slide&gt;
  &lt;/div&gt;
  &lt;div slot="pagination"&gt;
    &lt;kemet-carousel-prev&gt;Prev&lt;/kemet-carousel-prev&gt;
    &lt;kemet-carousel-link slide="0"&gt;1&lt;/kemet-carousel-link&gt;
    &lt;kemet-carousel-link slide="1"&gt;2&lt;/kemet-carousel-link&gt;
    &lt;kemet-carousel-link slide="2"&gt;3&lt;/kemet-carousel-link&gt;
    &lt;kemet-carousel-next&gt;Next&lt;/kemet-carousel-next&gt;
  &lt;/div&gt;
&lt;/kemet-carousel&gt;`;

export const snippetSlideshow = html
`&lt;kemet-carousel slideshow="3"&gt;
  &lt;div slot="slides"&gt;
    &lt;kemet-carousel-slide&gt;Slide One&lt;/kemet-carousel-slide&gt;
    &lt;kemet-carousel-slide&gt;Slide Two&lt;/kemet-carousel-slide&gt;
    &lt;kemet-carousel-slide&gt;Slide Three&lt;/kemet-carousel-slide&gt;
  &lt;/div&gt;
&lt;/kemet-carousel&gt;`;

export const snippetTransitions = html
`&lt;kemet-carousel slideshow="3"&gt;
  &lt;div slot="slides"&gt;
    &lt;kemet-carousel-slide transition="fade"&gt;Slide One&lt;/kemet-carousel-slide&gt;
    &lt;kemet-carousel-slide transition="fade"&gt;Slide Two&lt;/kemet-carousel-slide&gt;
    &lt;kemet-carousel-slide transition="fade"&gt;Slide Three&lt;/kemet-carousel-slide&gt;
  &lt;/div&gt;
&lt;/kemet-carousel&gt;`;

export const snippetDisabling = html
`&lt;kemet-carousel&gt;
  &lt;div slot="slides"&gt;
    &lt;kemet-carousel-slide&gt;
      &lt;button&gt;Click to enable next.&lt;/button&gt;
    &lt;/kemet-carousel-slide&gt;
    &lt;kemet-carousel-slide&gt;Slide Two&lt;/kemet-carousel-slide&gt;
    &lt;kemet-carousel-slide&gt;Slide Three&lt;/kemet-carousel-slide&gt;
  &lt;/div&gt;
  &lt;div slot="pagination"&gt;
    &lt;kemet-carousel-next disabled&gt;Next&lt;/kemet-carousel-next&gt;
  &lt;/div&gt;
&lt;/kemet-carousel&gt;`;
