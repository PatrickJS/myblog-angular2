/// <reference path="../../../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
/// <reference path="../../../../node_modules/angular2/bundles/typings/angular2/http.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Angular
 */
var angular2_1 = require("angular2/angular2");
var http_1 = require("angular2/http");
var BlogList = (function () {
    //Here we will start picking up the blog items from the backoffice
    function BlogList(http) {
        this.http = http;
        this.http = http;
    }
    BlogList.prototype.onInit = function () {
        // Properties are resolved and things like
        // this.mapWindow and this.mapControls
        // had a chance to resolve from the
        // two child components <map-window> and <map-controls>
        this.makeRequest();
    };
    BlogList.prototype.makeRequest = function () {
        var _this = this;
        this.loading = true;
        this.http.request('http://localhost/blog_backoffice/blog-items-fields')
            .toRx()
            .subscribe(function (res) {
            _this.data = res.json();
            _this.loading = false;
            console.log(_this.data);
        });
    };
    BlogList = __decorate([
        angular2_1.Component({
            selector: 'blog-list'
        }),
        angular2_1.View({
            templateUrl: 'app/components/bloglist/blog-list.tpl.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BlogList);
    return BlogList;
})();
exports.BlogList = BlogList;
//# sourceMappingURL=bloglist.js.map