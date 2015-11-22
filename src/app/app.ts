/*
 * Angular 2 decorators and services
 */
import {Directive, Component, View, ElementRef} from 'angular2/angular2';
import {RouteConfig, Router} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

/*
 * Angular Directives
 */
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ViewEncapsulation} from 'angular2/angular2';

/*
 * App child components
 */
import {BlogList} from "./components/bloglist/bloglist";
import {SiteIntro} from "./components/siteintro/siteintro";

var page_css = require("!css!sass!./css/layout/_page.scss");

@Component({
    selector: 'blog-app',
})
@View({
    directives: [ROUTER_DIRECTIVES, BlogList, SiteIntro],
    styles: [`${page_css}`],
    encapsulation : ViewEncapsulation.None,
    template: `
<div class="blog-app">
                    <site-intro></site-intro>
                    <router-outlet></router-outlet>
                </div>`
})
@RouteConfig([
    {path: "/", redirectTo: "/blog"},
    {path: '/blog', component: BlogList, as: 'Bloglist'}
])
export class App {
    
}