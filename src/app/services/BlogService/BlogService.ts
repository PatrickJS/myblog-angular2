import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {BlogItem} from "../../Models/blogitem/blogitem";

@Injectable()
export class BlogService {
    blogitems:any;

    constructor(http:Http) {
        this.blogitems = http.get('http://localhost/blog_backoffice/blog-items-fields')
            .map(response => response.json().map(item => {
                return new BlogItem(
                    item.field_image,
                    item.title,
                    item.body,
                    item.path,
                    item.nid
                )
            }));
    }
}