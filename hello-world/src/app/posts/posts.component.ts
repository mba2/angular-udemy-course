
import { Component, OnInit } from '@angular/core';
// ERRORS
import { AppError } from './../errors/AppError.error';
import { NotFoundError } from './../errors/NotFound.error';
import { BadInputError } from './../errors/BadInput.error';
//SERVICES
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  providers : [PostService],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  private posts: any[];

  constructor(private service: PostService) { };

  ngOnInit() {
    this.service.get()
    // APPROACH: DEALING WITH A RESPONSE OBJECT
    .subscribe(
      response =>{
        this.posts = response.json();
      }
    ); 
    // APPROACH: DEALING WITH AN ARRAY OF NORMAL OBJECTS
    // .subscribe(
    //   posts => this.posts = posts
    // );
  };

  trackById(i, item) {
    return item.id;
  };

  private createPost(input: HTMLInputElement) : void {
    let post = { title: input.value };
    this.posts.splice(0,0,post);
    
    input.value = "";
    console.log(post);
    
    this.service.post(post)
    .subscribe(
      response => {
        post['id'] = response.json().id;
        console.log(post);
      },
      (error: Response) => {
        this.posts.splice(0,1);
        
        if(error instanceof BadInputError) 
            /**
             * THIS SIMULATES AN ERROR THAT'S AN OBJECT AND CONTAIN DATA TELLING ABOUT A FORM ERROR.
              * AND..... AS error VARIABLE HERE IS OUR CUSTOM ERROR OBJECT (BadInputError)... IT'LL CONTAIN INSTRUCTIONS OF THE REASONS THE ERROR OCCURRED..SO WE CAN PASS TO THE USER...AT THE BOTTOM OF THE FORM..
              * this.form.setErrors(error);
            */
            //THIS LINE IS HERE TO 'NOT' BREAK THE CODE FOR AN EMPTY IF STATEMENT
            console.log(error);
          else 
            /*
              *  IF WE WANT TO THEAT THE ERROR WITH A SPECIFIC ERROR WE SHOULD:
              *    alert("Use the alert to tell the user about this error if the else clause is reached!!")   or
              *    return Observable.throw(new AnotherCustomError());
              *  BUT...IF WE SET A CUSTOM GLOBAL ERROR CLASS (OurCustomGlobalError)... TO DEAL IF ALL UNTREATED ERRORS..AND INSIDE THE
              *  PROVIDER'S ARRAY WE SET THIS CUSTOM ERROR CLASS TO OVERRIDE THE ANGULAR'S GLOBAL ERROR CLASS (ErrorHandler)... LIKE THIS
              *   providers: [
                    {
                      provide : ErrorHandler,
                      useClass : OurCustomGlobalError
                    }
                  ],
              *  WE NEED TO RETHROW AN ERROR... A SIMPLE RETHROW....AND LET THE BROWSER INTERPRETER TO SPREAD THE ERROR... UNTIL IT REACHES OUT CUSTOM GLOBAL CLASS (OurCustomGlobalError)
            */
            throw error;
        }
      );
  };
  
  private updatePost(post) {
    this.service.patch(post)
      .subscribe(
        response => {
          console.log(response.json())
      });
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    if(index >= 0) this.posts.splice(index,1);
    this.service.delete(12121)
      .subscribe(
        response => { null },
        (error: AppError) => { 
          this.posts.splice(index,0,post);
          if(error instanceof NotFoundError) 
            alert("Post already deleted!");
          else 
            throw error;
      });
  }
}
