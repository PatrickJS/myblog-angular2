/// <reference path="../../../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
/// <reference path="../../../../node_modules/angular2/bundles/typings/angular2/http.d.ts" />

/*
 * Angular
 */
import {Component, View, NgIf} from "angular2/angular2";
import {Http, Response} from "angular2/http";

@Component({
    selector: 'blog-list'
})
@View({
    template: `<div class="blog-list blogs">
</div>`
})
export class BlogList {

    data: Object;
    loading: boolean;

    //Here we will start picking up the blog items from the backoffice
    constructor(public http: Http) {
        this.http = http;
    }

    onInit() {
        // Properties are resolved and things like
        // this.mapWindow and this.mapControls
        // had a chance to resolve from the
        // two child components <map-window> and <map-controls>
        this.makeRequest();
    }

    makeRequest(): void {
        this.loading = true;
        this.http.request('http://localhost/blog_backoffice/blog-items-fields')
            .subscribe((res:Response) => {
                this.data = res.json();
                this.loading = false;
                console.log(this.data);
            });
    }
}