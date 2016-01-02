/*
 * Angular 2 decorators and services
 */
import {Directive,View, Component, ElementRef, Renderer,ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

/*
 * App child components
 */
import {BlogList} from "./components/bloglist/bloglist";
import {SiteIntro} from "./components/siteintro/siteintro";
import {BlogNode} from "./components/blognode/blognode";
import {Header} from "./components/Header/Header";

var page_css = require("!css!sass!./css/layout/_page.scss");

@Component({
    selector: 'blog-app',
})
@View({
    directives: [ROUTER_DIRECTIVES, BlogList, SiteIntro, Header],
    styles: [`${page_css}`],
    encapsulation : ViewEncapsulation.None,
    template: `
    <blog-header></blog-header>
    <div class="blog-app">
        <site-intro></site-intro>
        <router-outlet></router-outlet>
    </div>`
})
@RouteConfig([
    {path: '/', component: BlogList, as: 'Home'},
    {path: '/blog/:title', component: BlogNode, as: 'Blognode'}
])
export class App {
    
}