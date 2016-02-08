/*
 * Angular 2 decorators and services
 */
import {Directive,View, Component, Renderer,ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

/*
 * App child components
 */
import {BlogList} from "./components/bloglist/bloglist";
import {BlogNode} from "./components/blognode/blognode";
import {Header} from "./components/Header/Header";
import {NavSidebar} from "./components/NavSidebar/NavSidebar";
import {about} from "./components/about/about";

var page_css = require("!css!sass!./css/layout/_page.scss");

@Component({
    selector: 'blog-app',
})
@View({
    directives: [ROUTER_DIRECTIVES, BlogList, Header, NavSidebar],
    styles: [`${page_css}`],
    encapsulation : ViewEncapsulation.None,
    template: `
    <blog-header></blog-header>
    <nav-sidebar (NavStateChanged)="moveBody($event)" [navLinks]=links></nav-sidebar>
    <div class="blog-app" [ngClass]="{shiftLeft:shifted}">
        <router-outlet></router-outlet>
    </div>`
})
@RouteConfig([
    {path: '/', component: BlogList, as: 'Home'},
    {path: '/blog/:title', component: BlogNode, as: 'Blognode'},
    {path: '/about', component: about, as: 'About'}
])
export class App {

    links: any;
    shifted:boolean;

    ngOnInit(){
        this.links = [{
            "url": "About",
            "name": "About Me"
        }]
    }

    moveBody(message: string) {
        this.shifted = !this.shifted;
    }
    
}