import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {BlogItem} from "../../Models/blogitem/blogitem";

@Injectable()
export class BlogService {
    blogitems:any;
    blogitemnode:any;

    constructor(http:Http) {
        this.blogitems = function(node_item) {
            return http.get('http://joaogarin.com/blog_backoffice/blog-items-fields/all')
                .map(response => response.json().map(item => {
                    return new BlogItem(
                        item.field_image,
                        item.title,
                        item.body,
                        item.path.replace("/blog_backoffice/", ""),
                        item.nid,
                        item.created
                    )
                }))
        };

        this.blogitemnode = function (title) {

            return http.get('http://joaogarin.com/blog_backoffice/get-alias-id/' + title).map(response_alias => response_alias.json().map(
                alias_item => {
                    //An observable being returned inside another
                    return http.get('http://localhost/blog_backoffice/get-node/' + alias_item.nid)
                        .map(response => response.json().map(item => {
                            return new BlogItem(
                                item.field_image,
                                item.title,
                                item.body,
                                item.path.replace("/blog_backoffice/", ""),
                                item.nid,
                                item.created
                            )
                        }))
                }
            ));
        };
    }
}