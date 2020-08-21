import { html } from 'lit-element';

export const snippetMarkup = html
`&lt;kemet-drawer effect="[choose-an-effect]" side="[choose-a-side]"&gt;
  &lt;nav slot="navigation"&gt;
    &lt;!-- your navigation markup here --&gt;
  &lt;/nav&gt;
  &lt;section slot="content"&gt;
    &lt;!-- your content markup here --&gt;
  &lt;/section&gt;
&lt;kemet-drawer&gt;`;

export const snippetJS = html
`// an example on how to toggle the drawer
const drawer = document.querySelector('kemet-drawer');
drawer.toggle();`;
