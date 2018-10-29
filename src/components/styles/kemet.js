/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';

export const StylesKemet = html`
<style>
[layout="flexrow"]>*,[layout="flexgrid"]>*{-webkit-box-flex:1;-ms-flex:1;flex:1;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;word-wrap:break-word;text-align:left}[layout="flexrow"]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-padding-start:0}[layout*="flex"][flex-items]>*{display:-webkit-box;display:-ms-flexbox;display:flex}[layout*="flex"][autostack]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[layout*="flex"][autostack][align]>*{-ms-flex-item-align:initial;align-self:initial}@media screen and (min-width: 640px){[layout*="flex"][autostack]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}[layout*="flex"][align="top"]{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}[layout*="flex"][align="middle"]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}[layout*="flex"][align="stretch"]{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}[layout*="flex"][align="bottom"]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}[layout*="flex"][cross-align="left"]{-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left}[layout*="flex"][cross-align="right"]{-webkit-box-pack:right;-ms-flex-pack:right;justify-content:right}[layout*="flex"][cross-align="center"]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}[layout*="flex"][cross-align="between"]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}[layout*="flex"][cross-align="around"]{-ms-flex-pack:distribute;justify-content:space-around}[layout*="flex"]>[align="top"]{-ms-flex-item-align:start;align-self:flex-start}[layout*="flex"]>[align="middle"]{-ms-flex-item-align:center;align-self:center}[layout*="flex"]>[align="stretch"]{-ms-flex-item-align:stretch;align-self:stretch}[layout*="flex"]>[align="bottom"]{-ms-flex-item-align:end;align-self:flex-end}[layout="flexgrid"]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-padding-start:0}@media screen and (min-width: 0){[basis*="tiny-1-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}[basis*="tiny-2-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}[basis*="tiny-3-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}[basis*="tiny-4-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}[basis*="tiny-5-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}[basis*="tiny-6-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}[basis*="tiny-7-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 14.28571%;flex:0 0 14.28571%;max-width:14.28571%}[basis*="tiny-8-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 12.5%;flex:0 0 12.5%;max-width:12.5%}[basis*="tiny-9-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 11.11111%;flex:0 0 11.11111%;max-width:11.11111%}[basis*="tiny-10-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}[basis*="tiny-11-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 9.09091%;flex:0 0 9.09091%;max-width:9.09091%}[basis*="tiny-12-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}}@media screen and (min-width: 321px){[basis*="small-1-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}[basis*="small-2-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}[basis*="small-3-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}[basis*="small-4-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}[basis*="small-5-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}[basis*="small-6-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}[basis*="small-7-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 14.28571%;flex:0 0 14.28571%;max-width:14.28571%}[basis*="small-8-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 12.5%;flex:0 0 12.5%;max-width:12.5%}[basis*="small-9-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 11.11111%;flex:0 0 11.11111%;max-width:11.11111%}[basis*="small-10-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}[basis*="small-11-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 9.09091%;flex:0 0 9.09091%;max-width:9.09091%}[basis*="small-12-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}}@media screen and (min-width: 768px){[basis*="medium-1-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}[basis*="medium-2-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}[basis*="medium-3-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}[basis*="medium-4-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}[basis*="medium-5-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}[basis*="medium-6-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}[basis*="medium-7-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 14.28571%;flex:0 0 14.28571%;max-width:14.28571%}[basis*="medium-8-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 12.5%;flex:0 0 12.5%;max-width:12.5%}[basis*="medium-9-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 11.11111%;flex:0 0 11.11111%;max-width:11.11111%}[basis*="medium-10-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}[basis*="medium-11-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 9.09091%;flex:0 0 9.09091%;max-width:9.09091%}[basis*="medium-12-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}}@media screen and (min-width: 1024px){[basis*="large-1-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}[basis*="large-2-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}[basis*="large-3-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}[basis*="large-4-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}[basis*="large-5-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}[basis*="large-6-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}[basis*="large-7-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 14.28571%;flex:0 0 14.28571%;max-width:14.28571%}[basis*="large-8-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 12.5%;flex:0 0 12.5%;max-width:12.5%}[basis*="large-9-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 11.11111%;flex:0 0 11.11111%;max-width:11.11111%}[basis*="large-10-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}[basis*="large-11-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 9.09091%;flex:0 0 9.09091%;max-width:9.09091%}[basis*="large-12-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}}@media screen and (min-width: 1440px){[basis*="huge-1-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}[basis*="huge-2-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}[basis*="huge-3-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}[basis*="huge-4-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}[basis*="huge-5-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}[basis*="huge-6-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}[basis*="huge-7-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 14.28571%;flex:0 0 14.28571%;max-width:14.28571%}[basis*="huge-8-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 12.5%;flex:0 0 12.5%;max-width:12.5%}[basis*="huge-9-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 11.11111%;flex:0 0 11.11111%;max-width:11.11111%}[basis*="huge-10-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}[basis*="huge-11-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 9.09091%;flex:0 0 9.09091%;max-width:9.09091%}[basis*="huge-12-columns"]>*{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}}[layout="flexcolumn"]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:100%}[layout="flexcolumn"]>*{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[layout="flexcolumn"]>[size-content]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}[layout="flexcolumn"][align="bottom"]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}[layout="flexcolumn"][align="center"]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}[layout="flexcolumn"][align="between"]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}[layout="flexcolumn"][align="around"]{-ms-flex-pack:distribute;justify-content:space-around}[layout="flexcolumn"][align]>*{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}[layout="flexlist"]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:auto;margin:0px;padding:0px;list-style:none;-webkit-padding-start:0}[layout="flexlist"]>*{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}@media screen and (min-width: 0){[breakpoint*="tiny-25"]{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}[breakpoint*="tiny-33"]{-webkit-box-flex:0;-ms-flex:0 0 33.33%;flex:0 0 33.33%;max-width:33.33%}[breakpoint*="tiny-66"]{-webkit-box-flex:0;-ms-flex:0 0 66.66%;flex:0 0 66.66%;max-width:66.66%}[breakpoint*="tiny-75"]{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}[breakpoint*="tiny-content"]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}[breakpoint*="tiny-10"]{-webkit-box-flex:0;-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}[breakpoint*="tiny-20"]{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}[breakpoint*="tiny-30"]{-webkit-box-flex:0;-ms-flex:0 0 30%;flex:0 0 30%;max-width:30%}[breakpoint*="tiny-40"]{-webkit-box-flex:0;-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%}[breakpoint*="tiny-50"]{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}[breakpoint*="tiny-60"]{-webkit-box-flex:0;-ms-flex:0 0 60%;flex:0 0 60%;max-width:60%}[breakpoint*="tiny-70"]{-webkit-box-flex:0;-ms-flex:0 0 70%;flex:0 0 70%;max-width:70%}[breakpoint*="tiny-80"]{-webkit-box-flex:0;-ms-flex:0 0 80%;flex:0 0 80%;max-width:80%}[breakpoint*="tiny-90"]{-webkit-box-flex:0;-ms-flex:0 0 90%;flex:0 0 90%;max-width:90%}[breakpoint*="tiny-100"]{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}@media screen and (min-width: 321px){[breakpoint*="small-25"]{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}[breakpoint*="small-33"]{-webkit-box-flex:0;-ms-flex:0 0 33.33%;flex:0 0 33.33%;max-width:33.33%}[breakpoint*="small-66"]{-webkit-box-flex:0;-ms-flex:0 0 66.66%;flex:0 0 66.66%;max-width:66.66%}[breakpoint*="small-75"]{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}[breakpoint*="small-content"]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}[breakpoint*="small-10"]{-webkit-box-flex:0;-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}[breakpoint*="small-20"]{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}[breakpoint*="small-30"]{-webkit-box-flex:0;-ms-flex:0 0 30%;flex:0 0 30%;max-width:30%}[breakpoint*="small-40"]{-webkit-box-flex:0;-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%}[breakpoint*="small-50"]{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}[breakpoint*="small-60"]{-webkit-box-flex:0;-ms-flex:0 0 60%;flex:0 0 60%;max-width:60%}[breakpoint*="small-70"]{-webkit-box-flex:0;-ms-flex:0 0 70%;flex:0 0 70%;max-width:70%}[breakpoint*="small-80"]{-webkit-box-flex:0;-ms-flex:0 0 80%;flex:0 0 80%;max-width:80%}[breakpoint*="small-90"]{-webkit-box-flex:0;-ms-flex:0 0 90%;flex:0 0 90%;max-width:90%}[breakpoint*="small-100"]{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}@media screen and (min-width: 768px){[breakpoint*="medium-25"]{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}[breakpoint*="medium-33"]{-webkit-box-flex:0;-ms-flex:0 0 33.33%;flex:0 0 33.33%;max-width:33.33%}[breakpoint*="medium-66"]{-webkit-box-flex:0;-ms-flex:0 0 66.66%;flex:0 0 66.66%;max-width:66.66%}[breakpoint*="medium-75"]{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}[breakpoint*="medium-content"]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}[breakpoint*="medium-10"]{-webkit-box-flex:0;-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}[breakpoint*="medium-20"]{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}[breakpoint*="medium-30"]{-webkit-box-flex:0;-ms-flex:0 0 30%;flex:0 0 30%;max-width:30%}[breakpoint*="medium-40"]{-webkit-box-flex:0;-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%}[breakpoint*="medium-50"]{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}[breakpoint*="medium-60"]{-webkit-box-flex:0;-ms-flex:0 0 60%;flex:0 0 60%;max-width:60%}[breakpoint*="medium-70"]{-webkit-box-flex:0;-ms-flex:0 0 70%;flex:0 0 70%;max-width:70%}[breakpoint*="medium-80"]{-webkit-box-flex:0;-ms-flex:0 0 80%;flex:0 0 80%;max-width:80%}[breakpoint*="medium-90"]{-webkit-box-flex:0;-ms-flex:0 0 90%;flex:0 0 90%;max-width:90%}[breakpoint*="medium-100"]{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}@media screen and (min-width: 1024px){[breakpoint*="large-25"]{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}[breakpoint*="large-33"]{-webkit-box-flex:0;-ms-flex:0 0 33.33%;flex:0 0 33.33%;max-width:33.33%}[breakpoint*="large-66"]{-webkit-box-flex:0;-ms-flex:0 0 66.66%;flex:0 0 66.66%;max-width:66.66%}[breakpoint*="large-75"]{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}[breakpoint*="large-content"]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}[breakpoint*="large-10"]{-webkit-box-flex:0;-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}[breakpoint*="large-20"]{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}[breakpoint*="large-30"]{-webkit-box-flex:0;-ms-flex:0 0 30%;flex:0 0 30%;max-width:30%}[breakpoint*="large-40"]{-webkit-box-flex:0;-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%}[breakpoint*="large-50"]{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}[breakpoint*="large-60"]{-webkit-box-flex:0;-ms-flex:0 0 60%;flex:0 0 60%;max-width:60%}[breakpoint*="large-70"]{-webkit-box-flex:0;-ms-flex:0 0 70%;flex:0 0 70%;max-width:70%}[breakpoint*="large-80"]{-webkit-box-flex:0;-ms-flex:0 0 80%;flex:0 0 80%;max-width:80%}[breakpoint*="large-90"]{-webkit-box-flex:0;-ms-flex:0 0 90%;flex:0 0 90%;max-width:90%}[breakpoint*="large-100"]{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}@media screen and (min-width: 1440px){[breakpoint*="huge-25"]{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}[breakpoint*="huge-33"]{-webkit-box-flex:0;-ms-flex:0 0 33.33%;flex:0 0 33.33%;max-width:33.33%}[breakpoint*="huge-66"]{-webkit-box-flex:0;-ms-flex:0 0 66.66%;flex:0 0 66.66%;max-width:66.66%}[breakpoint*="huge-75"]{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}[breakpoint*="huge-content"]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}[breakpoint*="huge-10"]{-webkit-box-flex:0;-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}[breakpoint*="huge-20"]{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}[breakpoint*="huge-30"]{-webkit-box-flex:0;-ms-flex:0 0 30%;flex:0 0 30%;max-width:30%}[breakpoint*="huge-40"]{-webkit-box-flex:0;-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%}[breakpoint*="huge-50"]{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}[breakpoint*="huge-60"]{-webkit-box-flex:0;-ms-flex:0 0 60%;flex:0 0 60%;max-width:60%}[breakpoint*="huge-70"]{-webkit-box-flex:0;-ms-flex:0 0 70%;flex:0 0 70%;max-width:70%}[breakpoint*="huge-80"]{-webkit-box-flex:0;-ms-flex:0 0 80%;flex:0 0 80%;max-width:80%}[breakpoint*="huge-90"]{-webkit-box-flex:0;-ms-flex:0 0 90%;flex:0 0 90%;max-width:90%}[breakpoint*="huge-100"]{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}[gutters="minus-3"]{margin-right:-.5rem}[gutters="minus-3"]>*{padding-right:.5rem}[layout="flexgrid"][gutters="minus-3"]>*{margin-bottom:.5rem}[layout="flexcolumn"][gutters="minus-3"]>:not(:first-child){margin-top:.5rem}@media only screen and (max-width: 640px){[layout="flexrow"][gutters="minus-3"][autostack]>*{margin-bottom:.5rem}}[gutters="minus-2"]{margin-right:-.75rem}[gutters="minus-2"]>*{padding-right:.75rem}[layout="flexgrid"][gutters="minus-2"]>*{margin-bottom:.75rem}[layout="flexcolumn"][gutters="minus-2"]>:not(:first-child){margin-top:.75rem}@media only screen and (max-width: 640px){[layout="flexrow"][gutters="minus-2"][autostack]>*{margin-bottom:.75rem}}[gutters="minus-1"]{margin-right:-.85rem}[gutters="minus-1"]>*{padding-right:.85rem}[layout="flexgrid"][gutters="minus-1"]>*{margin-bottom:.85rem}[layout="flexcolumn"][gutters="minus-1"]>:not(:first-child){margin-top:.85rem}@media only screen and (max-width: 640px){[layout="flexrow"][gutters="minus-1"][autostack]>*{margin-bottom:.85rem}}[gutters]{margin-right:-1rem}[gutters]>*{padding-right:1rem}[layout="flexgrid"][gutters]>*{margin-bottom:1rem}[layout="flexcolumn"][gutters]>:not(:first-child){margin-top:1rem}@media only screen and (max-width: 640px){[layout="flexrow"][gutters][autostack]>*{margin-bottom:1rem}}[gutters="plus-1"]{margin-right:-1.125rem}[gutters="plus-1"]>*{padding-right:1.125rem}[layout="flexgrid"][gutters="plus-1"]>*{margin-bottom:1.125rem}[layout="flexcolumn"][gutters="plus-1"]>:not(:first-child){margin-top:1.125rem}@media only screen and (max-width: 640px){[layout="flexrow"][gutters="plus-1"][autostack]>*{margin-bottom:1.125rem}}[gutters="plus-2"]{margin-right:-1.25rem}[gutters="plus-2"]>*{padding-right:1.25rem}[layout="flexgrid"][gutters="plus-2"]>*{margin-bottom:1.25rem}[layout="flexcolumn"][gutters="plus-2"]>:not(:first-child){margin-top:1.25rem}@media only screen and (max-width: 640px){[layout="flexrow"][gutters="plus-2"][autostack]>*{margin-bottom:1.25rem}}[gutters="plus-3"]{margin-right:-1.5rem}[gutters="plus-3"]>*{padding-right:1.5rem}[layout="flexgrid"][gutters="plus-3"]>*{margin-bottom:1.5rem}[layout="flexcolumn"][gutters="plus-3"]>:not(:first-child){margin-top:1.5rem}@media only screen and (max-width: 640px){[layout="flexrow"][gutters="plus-3"][autostack]>*{margin-bottom:1.5rem}}[gutters="plus-4"]{margin-right:-2rem}[gutters="plus-4"]>*{padding-right:2rem}[layout="flexgrid"][gutters="plus-4"]>*{margin-bottom:2rem}[layout="flexcolumn"][gutters="plus-4"]>:not(:first-child){margin-top:2rem}@media only screen and (max-width: 640px){[layout="flexrow"][gutters="plus-4"][autostack]>*{margin-bottom:2rem}}[gutters="plus-5"]{margin-right:-2.25rem}[gutters="plus-5"]>*{padding-right:2.25rem}[layout="flexgrid"][gutters="plus-5"]>*{margin-bottom:2.25rem}[layout="flexcolumn"][gutters="plus-5"]>:not(:first-child){margin-top:2.25rem}@media only screen and (max-width: 640px){[layout="flexrow"][gutters="plus-5"][autostack]>*{margin-bottom:2.25rem}}[gutters="plus-6"]{margin-right:-3rem}[gutters="plus-6"]>*{padding-right:3rem}[layout="flexgrid"][gutters="plus-6"]>*{margin-bottom:3rem}[layout="flexcolumn"][gutters="plus-6"]>:not(:first-child){margin-top:3rem}@media only screen and (max-width: 640px){[layout="flexrow"][gutters="plus-6"][autostack]>*{margin-bottom:3rem}}@media screen and (min-width: 0){[order="tiny-minus-1"]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}[order="tiny-minus-2"]{-webkit-box-ordinal-group:-1;-ms-flex-order:-2;order:-2}[order="tiny-minus-3"]{-webkit-box-ordinal-group:-2;-ms-flex-order:-3;order:-3}[order="tiny-minus-4"]{-webkit-box-ordinal-group:-3;-ms-flex-order:-4;order:-4}[order="tiny-minus-5"]{-webkit-box-ordinal-group:-4;-ms-flex-order:-5;order:-5}[order="tiny-plus-1"]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}[order="tiny-plus-2"]{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[order="tiny-plus-3"]{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}[order="tiny-plus-4"]{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}[order="tiny-plus-5"]{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}}@media screen and (min-width: 321px){[order="small-minus-1"]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}[order="small-minus-2"]{-webkit-box-ordinal-group:-1;-ms-flex-order:-2;order:-2}[order="small-minus-3"]{-webkit-box-ordinal-group:-2;-ms-flex-order:-3;order:-3}[order="small-minus-4"]{-webkit-box-ordinal-group:-3;-ms-flex-order:-4;order:-4}[order="small-minus-5"]{-webkit-box-ordinal-group:-4;-ms-flex-order:-5;order:-5}[order="small-plus-1"]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}[order="small-plus-2"]{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[order="small-plus-3"]{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}[order="small-plus-4"]{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}[order="small-plus-5"]{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}}@media screen and (min-width: 768px){[order="medium-minus-1"]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}[order="medium-minus-2"]{-webkit-box-ordinal-group:-1;-ms-flex-order:-2;order:-2}[order="medium-minus-3"]{-webkit-box-ordinal-group:-2;-ms-flex-order:-3;order:-3}[order="medium-minus-4"]{-webkit-box-ordinal-group:-3;-ms-flex-order:-4;order:-4}[order="medium-minus-5"]{-webkit-box-ordinal-group:-4;-ms-flex-order:-5;order:-5}[order="medium-plus-1"]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}[order="medium-plus-2"]{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[order="medium-plus-3"]{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}[order="medium-plus-4"]{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}[order="medium-plus-5"]{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}}@media screen and (min-width: 1024px){[order="large-minus-1"]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}[order="large-minus-2"]{-webkit-box-ordinal-group:-1;-ms-flex-order:-2;order:-2}[order="large-minus-3"]{-webkit-box-ordinal-group:-2;-ms-flex-order:-3;order:-3}[order="large-minus-4"]{-webkit-box-ordinal-group:-3;-ms-flex-order:-4;order:-4}[order="large-minus-5"]{-webkit-box-ordinal-group:-4;-ms-flex-order:-5;order:-5}[order="large-plus-1"]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}[order="large-plus-2"]{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[order="large-plus-3"]{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}[order="large-plus-4"]{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}[order="large-plus-5"]{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}}@media screen and (min-width: 1440px){[order="huge-minus-1"]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}[order="huge-minus-2"]{-webkit-box-ordinal-group:-1;-ms-flex-order:-2;order:-2}[order="huge-minus-3"]{-webkit-box-ordinal-group:-2;-ms-flex-order:-3;order:-3}[order="huge-minus-4"]{-webkit-box-ordinal-group:-3;-ms-flex-order:-4;order:-4}[order="huge-minus-5"]{-webkit-box-ordinal-group:-4;-ms-flex-order:-5;order:-5}[order="huge-plus-1"]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}[order="huge-plus-2"]{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[order="huge-plus-3"]{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}[order="huge-plus-4"]{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}[order="huge-plus-5"]{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}}@media screen and (min-width: 0){.show-tiny-up{display:inherit !important}table.show-tiny-up{display:table !important}.hide-tiny-up{display:none !important}}@media screen and (max-width: 319px){.show-tiny-down{display:inherit !important}table.show-tiny-down{display:table !important}.hide-tiny-down{display:none !important}}@media screen and (min-width: 0) and (max-width: 319px){.show-tiny{display:inherit !important}table.show-tiny{display:table !important}.hide-tiny{display:none !important}}@media screen and (min-width: 320px){.show-small-up{display:inherit !important}table.show-small-up{display:table !important}.hide-small-up{display:none !important}}@media screen and (max-width: 767px){.show-small-down{display:inherit !important}table.show-small-down{display:table !important}.hide-small-down{display:none !important}}@media screen and (min-width: 320px) and (max-width: 767px){.show-small{display:inherit !important}table.show-small{display:table !important}.hide-small{display:none !important}}@media screen and (min-width: 768px){.show-medium-up{display:inherit !important}table.show-medium-up{display:table !important}.hide-medium-up{display:none !important}}@media screen and (max-width: 1023px){.show-medium-down{display:inherit !important}table.show-medium-down{display:table !important}.hide-medium-down{display:none !important}}@media screen and (min-width: 768px) and (max-width: 1023px){.show-medium{display:inherit !important}table.show-medium{display:table !important}.hide-medium{display:none !important}}@media screen and (min-width: 1024px){.show-large-up{display:inherit !important}table.show-large-up{display:table !important}.hide-large-up{display:none !important}}@media screen and (max-width: 1439px){.show-large-down{display:inherit !important}table.show-large-down{display:table !important}.hide-large-down{display:none !important}}@media screen and (min-width: 1024px) and (max-width: 1439px){.show-large{display:inherit !important}table.show-large{display:table !important}.hide-large{display:none !important}}@media screen and (min-width: 1440px){.show-huge-up{display:inherit !important}table.show-huge-up{display:table !important}.hide-huge-up{display:none !important}}@media screen and (max-width: 9999px){.show-huge-down{display:inherit !important}table.show-huge-down{display:table !important}.hide-huge-down{display:none !important}}@media screen and (min-width: 1440px) and (max-width: 9999px){.show-huge{display:inherit !important}table.show-huge{display:table !important}.hide-huge{display:none !important}}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-minus-3{font-size:.5rem}.text-minus-2{font-size:.75rem}.text-minus-1{font-size:.85rem}.text-base{font-size:1rem}.text-plus-1{font-size:1.125rem}.text-plus-2{font-size:1.25rem}.text-plus-3{font-size:1.5rem}.text-plus-4{font-size:2rem}.text-plus-5{font-size:2.25rem}.text-plus-6{font-size:3rem}
</style>
`;