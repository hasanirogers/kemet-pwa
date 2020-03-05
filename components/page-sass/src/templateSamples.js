import { html } from 'lit-element';

export const sampleGutters = html`$gutters: (
  none: 0,
  smallest: 4px,
  smaller: 8px,
  small: 12px,
  default: 16px, // do not remove this
  large: 20px,
  larger: 24px,
  largest: 28px,
);`;

export const sampleFlexiplier = html`&lt;div breakpoint="tiny-15"&gt;...&lt;/div&gt;`;

export const sampleBreakpoints = html`$breakpoints: (
  mobile: 0,
  tablet: 768px,
  desktop: 1024px,
);`;
