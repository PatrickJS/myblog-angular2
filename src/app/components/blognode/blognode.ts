/// <reference path="../../../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
/// <reference path="../../../../node_modules/angular2/bundles/typings/angular2/http.d.ts" />

/*
 * Angular
 */
import {Component, View, NgIf, NgFor} from "angular2/angular2";
import {RouteParams} from "angular2/router";
import {BlogItem} from "../../Models/blogitem/blogitem";
import {BlogService} from "../../services/BlogService/BlogService";
import {Disqus} from "../Disqus/disqus";

var blogs_css = require("!css!sass!./css/_blog_item_node.scss");

@Component({
    selector: 'blog-node',
    providers: [BlogService]
})
@View({
    directives: [NgFor,Disqus],
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
        <div class="comments">
            <disqus [disqus_identifier]="blog_item.id" [disqus_title]="blog_item.title" [disqus_url]="blog_item.url"></disqus>
        </div>
    </div>
</div>`
})
export class BlogNode {

    data: Object;
    loading: boolean;
    blogItems: Array<BlogItem>;
    title: string;

    //Here we will start picking up the blog items from the backoffice
    constructor(public blogservice: BlogService, private routeParams: RouteParams) {
        this.title = routeParams.get("title");

        blogservice.blogitemnode(this.title).subscribe(
            blognode => {
                blognode.map(blognode_obs => {
                    blognode_obs.subscribe(
                        node => this.blogItems = node
                    )
                });
            },
            error => console.error('Error: ' + error),
            () => {}
        );
    }
}