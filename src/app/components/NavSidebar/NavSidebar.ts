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
        <ul>
            <li *ngFor="#navLink of navLinks">
                <a href="navLink.url">{{navLink.name}}</a>
            </li>
        </ul>
     </aside>`
})

export class NavSidebar {

    navLinks:any;
    isOpen:boolean;
    NavStateChanged: EventEmitter<string>;

    constructor() {
        this.NavStateChanged = new EventEmitter();
    }

    ngOnInit() {
        this.isOpen = false;
    }

    toggleNav() {
        if (this.isOpen) {
            this.isOpen = false;
        }
        else {
            this.isOpen = true;
        }
        this.NavStateChanged.emit("opened");
    }
}