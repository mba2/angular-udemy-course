import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  private posts: any[];

  private lastId = 101;

  constructor(private service: PostService) { };

  trackById(i, item) {
    return item.id;
  };

  private createPost(input: HTMLInputElement) : void {
    let post = {
      userId : 10000,
      id : this.lastId++,
      title: input.value, 
      body: "this is some text" 
    };
    
    this.service.post(post)
      .subscribe(response => {
        this.posts.unshift(post);
      })
  }
  
  private updatePost(post : Post) {
    this.service.patch(post)
      .subscribe(response => {
        console.log(response.json())
      });
  }

  private deletePost(post: Post){
    this.service.delete(post)
      .subscribe(
        response => {
          console.log(this.posts);
          let index = this.posts.indexOf(post);
          console.log(index);
          if(index >= 0) this.posts.splice(index,1);
        },
        (error: Response) => {
          if(error.status === 404) 
            alert("Already Deleted");
          else{
            alert("Some Error Occured");
          }
        }
      );
  }

  ngOnInit() {
    this.service.get()
    .subscribe(response =>{
      this.posts = response.json();
    }) 
  }

}

interface Post {
  userId : number,
  id : number,
  title : string,
  body : string
}