import { html } from 'lit-element';

export const snippetMarkup = html
`&lt;kemet-scroll-link&gt;
  &lt;button&gt;Scroll to My Heading&lt;/button&gt;
&lt;/kemet-scroll-link&gt;`;

export const snippetJS = html
`// an example that has a link scroll to an element with an id of "my-heading"
const link = document.querySelector('kemet-scroll-link');
link.target = document.getElementById('my-heading')`;
