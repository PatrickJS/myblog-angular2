/*
 * Angular
 */
import {Component} from "angular2/core";
import {NgFor, NgIf} from "angular2/common";
import {RouteParams} from "angular2/router";
import {BlogItem} from "../../Models/blogitem/blogitem";
import {BlogService} from "../../services/BlogService/BlogService";
import {Disqus} from "../Disqus/disqus";
import {SiteIntro} from "../siteintro/siteintro";

var blogs_css = require("./css/_blog_item_node.scss");

@Component({
    selector: 'blog-node',
    providers: [BlogService],
    directives: [NgFor,Disqus,SiteIntro],
    styles: [`${blogs_css}`],
    template: `<site-intro></site-intro><div class="blog-list blogs">
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
        <div class="comments">
            <disqus [disqusIdentifier]="blog_item.id" [disqusTitle]="blog_item.title" [disqusUrl]="blog_item.url"></disqus>
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