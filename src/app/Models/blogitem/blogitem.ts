export class BlogItem {
    url: string;
    image: string;
    title: string;
    body: string;
    id: number;

    constructor(image,title,body,url,id){
        this.image = image;
        this.title = title;
        this.body = body;
        this.url = url;
        this.id = id;
    }
}