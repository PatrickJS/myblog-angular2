import {Component, View, EventEmitter} from "angular2/core";
import {NgFor, NgIf} from "angular2/common";
import {NgClass} from 'angular2/common';
import {RouterLink} from 'angular2/router';

var nav_css = require("!css!sass!./css/_navsidebar.scss");

@Component({
    selector: 'nav-sidebar',
    inputs: ['navLinks'],
    outputs: ['NavStateChanged']
})
@View({
    styles: [`${nav_css}`],
    directives: [NgFor, RouterLink, NgClass],
    template: `
    <div class="menu_toggle">
            <a (click)="toggleNav()"><i class="fa fa-navicon"></i></a>
    </div>
    <aside class="nav_sidebar" [ngClass]="{opened: isOpen}">
        <div class="user-pic">
          <a [routerLink]="['Home']"><img src="https://www.drupal.org/files/styles/grid-2/public/user-pictures/picture-612814-1413290760.png?itok=GXM2mba3"/></a>
        </div>
        <ul>
            <li *ngFor="#navLink of navLinks">
                <a [routerLink]="[navLink.url]">{{navLink.name}}</a>
            </li>
            <li>
                <a href="projects">Projects</a>
            </li>
            <li>
                <a href="Archives">Archives</a>
            </li>
        </ul>
        <a href="https://twitter.com/joaogarin" class="twitter-follow-button" data-show-count="false">Follow @joaogarin</a>
     </aside>`
})

export class NavSidebar {

    navLinks:any;
    isOpen:boolean;
    NavStateChanged:EventEmitter<string>;

    constructor() {
        this.NavStateChanged = new EventEmitter();
        Object.assign(this,{isOpen:false});
    }

    toggleNav() {
        var changedStatus = !this.isOpen;
        Object.assign(this,{isOpen:changedStatus});
        this.NavStateChanged.emit("opened");
    }
}