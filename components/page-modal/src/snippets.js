import { html } from 'lit-element';

export const snippetImport = html`import '@kemet/kemet-modal/kemet-modal.js';
import '@kemet/kemet-modal/kemet-modal-close.js'; // optional`;

export const snippetMarkup = html
`&lt;kemet-modal effect="[YOUR EFFECT HERE]"&gt;
  &lt;div&gt;
    &lt;p&gt;Your modal contents here.&lt;/p&gt;
    &lt;kemet-modal-close&gt;
      Your close button here.
    &lt;/kemet-modal-close&gt;
  &lt;/div&gt;
&lt;/kemet-modal&gt;`;

export const snippetJS = html`const modal = document.getElementById('your-modal');
modal.open();
modal.close();`;
