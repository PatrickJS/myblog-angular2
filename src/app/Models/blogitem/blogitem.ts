export class BlogItem {
    url:string;
    image:string;
    title:string;
    body:string;
    id:number;
    created:string;

    constructor(image, title, body, url, id, created) {
        this.image = image;
        this.title = title;
        this.body = body;
        this.url = url;
        this.id = id;
        this.created = created;
    }
}