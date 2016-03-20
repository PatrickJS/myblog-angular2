import {Component} from "angular2/core";

var header_css = require("./css/_header.scss");

@Component({
    selector:'blog-header',
    styles: [`${header_css}`],
    template: `<div class="blog_header">
    <div class="icon-list">
            <a class="hover-bg-facebook" href="https://www.facebook.com/joao.garin"><i class="fa fa-fw fa-facebook-square"></i></a>
            <a class="hover-bg-github" target="_blank" href="https://github.com/joaogarin"><i class="fa fa-fw fa-github-square"></i></a>
            <a class="hover-bg-drupal" target="_blank" href="https://www.drupal.org/u/joaogarin"><i class="fa fa-fw fa-drupal"></i></a>
            <a class="hover-bg-twitter" target="_blank" href="https://twitter.com/joaogarin"><i class="fa fa-fw fa-twitter-square"></i></a>
            <a class="hover-bg-linkedin" target="_blank" href="https://pt.linkedin.com/pub/joao-garin/25/185/9b1"><i class="fa fa-fw fa-linkedin-square"></i></a>
            <a class="hover-bg-behance" target="_blank" href="https://www.behance.net/joaogarin"><i class="fa fa-fw fa-behance"></i></a>
        </div>
    </div>`
})

export class Header {

}