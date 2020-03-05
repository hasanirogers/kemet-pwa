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

export const sampleFlexlayout3 = html`&lt;div layout="flexrow" gutters="tiny-none medium-default large-plus-6"&gt;
  &lt;div breakpoint="medium-33"&gt;&lt;span class="box"&gt;Item 1&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Item 2&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Item 3&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Item 4&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;`;

export const sampleFlexlayout4 = html`&lt;div layout="flexrow" flex-items gutters="minus-1" &gt;
  &lt;div breakpoint="tiny-content"&gt;
    &lt;span class="box"&gt;&hearts;&lt;/span&gt;
  &lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Item 2&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Item 3&lt;/span&gt;&lt;/div&gt;
  &lt;div breakpoint="tiny-50"&gt;&lt;span class="box"&gt;Item 4&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;`;

export const sampleFlexlayout5 = html`&lt;div layout="flexrow" gutters="plus-1" align="middle" style="height: 64px;"&gt;
  &lt;div align="bottom"&gt;
    &lt;span class="box"&gt;Item 1&lt;/span&gt;
  &lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Item 2&lt;/span&gt;&lt;/div&gt;
  &lt;div align="top"&gt;
    &lt;span class="box"&gt;Item 3&lt;/span&gt;
  &lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Item 4&lt;/span&gt;&lt;/div&gt;
  &lt;div align="bottom"&gt;
    &lt;span class="box"&gt;Item 5&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;`;

export const sampleFlexlayout6 = html`&lt;div layout="flexrow" cross-align="between"&gt;
  &lt;div breakpoint="tiny-66"&gt;&lt;span class="box"&gt;Left&lt;/span&gt;&lt;/div&gt;
  &lt;div breakpoint="tiny-content"&gt;&lt;span class="box"&gt;Right&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;`;

export const sampleFlexgrid1 = html `&lt;div layout="flexgrid" gutters="plus-1"&gt;
  &lt;div breakpoint="tiny-100 medium-33 large-25"&gt;
    &lt;span class="box"&gt;1&lt;/span&gt;
  &lt;/div&gt;
  &lt;div breakpoint="tiny-50 medium-33 large-25"&gt;
    &lt;span class="box"&gt;2&lt;/span&gt;
  &lt;/div&gt;
  &lt;div breakpoint="tiny-50 medium-33 large-25"&gt;
    &lt;span class="box"&gt;3&lt;/span&gt;
  &lt;/div&gt;
  &lt;div breakpoint="tiny-100 medium-100 large-25"&gt;
    &lt;span class="box"&gt;4&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;`;

export const sampleFlexgrid2 = html `&lt;div layout="flexgrid" gutters basis="tiny-4-columns medium-6-columns huge-12-columns"&gt;
  &lt;div&gt;&lt;span class="box"&gt;1&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;2&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;3&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;4&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;5&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;6&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;7&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;8&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;9&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;10&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;11&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;12&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;`;

export const sampleFlexcolumn1 = html`&lt;div layout="flexcolumn" gutters style="height:300px;"&gt;
  &lt;div&gt;&lt;span class="box"&gt;1&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;2&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;3&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;`;

export const sampleFlexcolumn2 = html`&lt;div layout="flexcolumn" gutters style="height:300px;"&gt;
  &lt;div size-content&gt;&lt;span class="box"&gt;1&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;2&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;3&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;`;

export const sampleFlexlist1 = html`&lt;div layout="flexlist" gutters&gt;
  &lt;div&gt;&lt;span class="box"&gt;One&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Two&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Three&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Four&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Five&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Six&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;`;

export const sampleFlexlist2 = html`&lt;div layout="flexlist" gutters&gt;
  &lt;div&gt;&lt;span class="box"&gt;One&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Two&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Three&lt;/span&gt;&lt;/div&gt;
  &lt;div order="medium-minus-1"&gt;&lt;span class="box" style="background:darkgoldenrod;"&gt;Four&lt;/span&gt;&lt;/div&gt;
  &lt;div order="medium-minus-1"&gt;&lt;span class="box" style="background:darkgoldenrod;"&gt;Five&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Six&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;`;

export const sampleFlexlist3 = html`&lt;div layout="flexlist" gutters&gt;
  &lt;div&gt;&lt;span class="box"&gt;One&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Two&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Three&lt;/span&gt;&lt;/div&gt;
  &lt;div order="medium-plus-1"&gt;&lt;span class="box" style="background:darkgoldenrod;"&gt;Four&lt;/span&gt;&lt;/div&gt;
  &lt;div order="medium-plus-1"&gt;&lt;span class="box" style="background:darkgoldenrod;"&gt;Five&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;span class="box"&gt;Six&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;`;
