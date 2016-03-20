import {Component} from "angular2/core";

var $css_about = require("./css/_about.scss");

@Component({
    selector: "about",
    template: `<div class="about">
        <div class="about-text">
            <div class="text-inner">
                <h1>Joao Anahory Garin</h1>
                <h3>Front end developer</h3>
                <p>I am a front end developer from Lisbon, living in Vienna. I am passionate about CSS, HTML Javacript and the whole world of UI and UX.</p>
                <div class="call-to-action">
                    <a href="#" class="btn btn-primary">Contact me</a>
                </div>
            </div>
        </div>
        <div class="about__image-background">
            <div class="inner">
            </div>
        </div>
    </div>`,
    styles: [`${$css_about}`]
})
export class about {

}