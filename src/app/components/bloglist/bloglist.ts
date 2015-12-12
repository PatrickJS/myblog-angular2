/// <reference path="../../../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
/// <reference path="../../../../node_modules/angular2/bundles/typings/angular2/http.d.ts" />

/*
 * Angular
 */
import {Component, View, NgIf, NgFor} from "angular2/angular2";
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
    <div class="blog_item" *ng-for="#blog_item of blogItems">
        <p class="text-muted">
            Post on : {{blog_item.created}} by Joao Garin
        </p>

        <h1 class="blog-title">
            {{blog_item.title}}
        </h1>

        <div class="blog-item__image" [inner-html]="blog_item.image">

        </div>

        <p class="post-body" [inner-html]="blog_item.body">

        </p>

        <div class="full-post">
            <a class="btn btn-primary" [router-link]="['/Blognode', {title: blog_item.url}]">Read full post</a>
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