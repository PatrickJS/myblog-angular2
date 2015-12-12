import { Component, View } from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

var css = require("!css!sass!./css/_siteintro.scss");
var logo = require("url!./images/logo_green.jpeg");

@Component({
    selector: 'site-intro',
    directives: [RouterLink],
    styles: [`${css}`],
    template:`<div class="site-intro">
  <a [router-link]="['Home']">
    <img alt="logo_dark" src="${logo}"/>
  </a>
  <p class="site-intro__intro-text">
    Hi, my name Joao. I love travelling, programming and sports. I also enjoy coffee very much. Thank you for
    visiting my blog.
  </p>
  <span class="site-intro__separator">
      <i class="fa fa-2x fa-list">

      </i>
  </span>
</div>` 
})
export class SiteIntro {
}