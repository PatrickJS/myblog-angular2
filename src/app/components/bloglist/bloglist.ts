/// <reference path="../../../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
/// <reference path="../../../../node_modules/angular2/bundles/typings/angular2/http.d.ts" />

/*
 * Angular
 */
import {Component, View, NgIf} from "angular2/angular2";
import {BlogItem} from "../../Models/blogitem/blogitem";
import {BlogService} from "../../services/BlogService/BlogService";

@Component({
    selector: 'blog-list',
    providers: [BlogService]
})
@View({
    template: `<div class="blog-list blogs">
</div>`
})
export class BlogList {

    data: Object;
    loading: boolean;
    blogItems: Array<BlogItem>;
    //Here we will start picking up the blog items from the backoffice
    constructor(public blogservice: BlogService) {

        blogservice.blogitems
            .subscribe(
                blogitems => this.blogItems = blogitems,
                error => console.error('Error: ' + error),
                () => console.log(this.blogItems)
            );
    }
}