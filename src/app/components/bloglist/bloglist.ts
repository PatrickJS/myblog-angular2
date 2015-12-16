/*
 * Angular
 */
import {Component, View} from "angular2/core";
import {NgFor, NgIf} from "angular2/common";
import {BlogItem} from "../../Models/blogitem/blogitem";
import {BlogService} from "../../services/BlogService/BlogService";
import {RouterLink} from 'angular2/router';

var blogs_css = require("!css!sass!./css/_blog_item.scss");

@Component({
    selector: 'blog-list',
    providers: [BlogService]
})
@View({
    directives: [NgFor,RouterLink],
    styles: [`${blogs_css}`],
    template: `<div class="blog-list blogs">
    <div class="blog_item" *ngFor="#blog_item of blogItems">
        <p class="text-muted">
            Post on : {{blog_item.created}} by Joao Garin
        </p>

        <h1 class="blog-title">
            {{blog_item.title}}
        </h1>

        <div class="blog-item__image" [innerHtml]="blog_item.image">

        </div>

        <p class="post-body" [innerHtml]="blog_item.body">

        </p>

        <div class="full-post">
            <a class="btn btn-primary" [routerLink]="['/Blognode', {title: blog_item.url}]">Read full post</a>
        </div>
    </div>
</div>`
})
export class BlogList {

    data: Object;
    loading: boolean;
    blogItems: Array<BlogItem>;
    //Here we will start picking up the blog items from the backoffice
    constructor(public blogservice: BlogService) {

        blogservice.blogitems("all")
            .subscribe(
                blogitems => this.blogItems = blogitems,
                error => console.error('Error: ' + error),
                () => console.log(this.blogItems)
            );
    }
}