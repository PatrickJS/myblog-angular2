export class BlogItem {
    url: string;
    imageUrl: string;
    title: string;
    body: string;
    id: number;

    constructor(imageUrl,title,body,url,id){
        this.imageUrl = imageUrl;
        this.title = title;
        this.body = body;
        this.url = url;
        this.id = id;
    }
}