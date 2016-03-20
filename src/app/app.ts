/*
 * Angular 2 decorators and services
 */
import {Directive, Component,ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';

/*
 * App child components
 */
import {BlogList} from "./components/bloglist/bloglist";
import {BlogNode} from "./components/blognode/blognode";
import {Header} from "./components/Header/Header";
import {NavSidebar} from "./components/NavSidebar/NavSidebar";
import {about} from "./components/about/about";

var page_css = require("./css/layout/_page.scss");

@Component({
    selector: 'app',
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
    {path: '/', component: BlogList, name: 'Home'},
    {path: '/blog', component: BlogList, name: 'Home'},
    {path: '/blog/:title', component: BlogNode, name: 'Blognode'},
    {path: '/about', component: about, name: 'About'}
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