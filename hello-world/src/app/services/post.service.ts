import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
  private url: string = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) { }

  public get() {
    return this.http.get(this.url);
  }

  public post(post: Post) {
    return this.http.post( 
      this.url,
      JSON.stringify(post)
    );
  }
  
  public patch(post: Post) {
    return this.http.patch(
      this.url + "/" + post.id, 
      { isRead: true,
        title: post.title
      }
    );
  }

  public delete(post: Post) {
    return this.http.delete(this.url + "/" + post.id);
  }
}


interface Post {
  userId : number,
  id : number,
  title : string,
  body : string
}