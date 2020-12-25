import { html } from 'lit-element';

export const snippetMarkup = html
`&lt;kemet-popover&gt;
  &lt;button slot="trigger"&gt;Popover Trigger&lt;/button&gt;
  &lt;span slot="content"&gt;Your popover contents here. Supports HTML.&lt;/span&gt;
&lt;/kemet-popover&gt;`;

export const snippetPopover = html
`&lt;kemet-popover&gt;
  &lt;strong slot="trigger"&gt;Activate Popover&lt;/strong&gt;
  &lt;span slot="content"&gt;This is a popover. Lets add some extra text in here and see what happens.&lt;/span&gt;
&lt;/kemet-popover&gt;`;

export const snippetTooltip = html
`&lt;kemet-popover tooltip&gt;
  &lt;strong slot="trigger"&gt;Activate Tooltip&lt;/strong&gt;
  &lt;span slot="content"&gt;This is a tooltip. Lets add some extra text in here and see what happens.&lt;/span&gt;
&lt;/kemet-popover&gt;`;

export const snippetCustomTooltip = html
`&lt;kemet-popover custom-tooltip&gt;
  &lt;strong slot="trigger"&gt;Activate Custom Tooltip&lt;/strong&gt;
  &lt;span slot="content"&gt;This is a custom tooltip. Here's a &lt;a href="http://kemet.online" target="_blank"&gt;random link&lt;/a&gt; to help test it out.&lt;/span&gt;
  &lt;span slot="custom-tooltip"&gt;
    &lt;svg width="32" height="18" viewBox="0 0 1366.99 767.67"&gt;
      &lt;polyline points="0.74 0.67 685.25 766.17 1366.24 0.67" style="fill:#fafafa; stroke:rgba(36,49,56,1); stroke-width:100px"/&gt;
    &lt;/svg&gt;
  &lt;/span&gt;
&lt;/kemet-popover&gt;`;
