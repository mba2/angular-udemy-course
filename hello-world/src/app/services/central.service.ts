import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// ERRORS
import { AppError, } from './../errors/AppError.error';
import { BadInputError } from './../errors/BadInput.error';
import { NotFoundError } from './../errors/NotFound.error';

// OBSERVABLES 
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";

@Injectable()

export class CentralService {

  constructor(
    private http: Http,
    private url: string
  ){}

  public get(resource?) {
    // APPROACH: DEALING WITH A RESPONSE OBJECT
    return this.http.get(this.url)
      .catch(this.errorHandler);
    /** 
      * APPROACH: DEALING WITH AN ARRAY OF NORMAL OBJECTS.
      *   WE GET THE 'response' AS AN ARGUEMNT OF AN ARROW FUNCTION 
      *   AND CONVERT IT TO AN ARRAY OF OBJECT WITH THE .json()
    */ 
    // return this.http.get(this.url)
    //   .map( response => response.json())
    //   .catch(this.errorHandler);
  }

  public post(resource: any) {
    return Observable.throw(new AppError());
    // return this.http.post( 
    //   this.url,
    //   JSON.stringify(resource)
    // ).catch(this.errorHandler)
  }
  
  public patch(resource) {
    return this.http.patch(
      this.url + "/" + resource.id, 
      { isRead: true,
        title: resource.title
      }
    ).catch(this.errorHandler);
  }

  public delete(id: number) {
    return this.http.delete(this.url + "/" + id)
    // THE CATCH OPERATOR CAN'T RETURN VOID. IT NEEDS TO RETURN AN OBSERVABLE
    // IN THIS CASE THIS RETURNED OBSERVABLE ALSO NEEDS TO HAVE AN CUSTOM ERROR.. AN ERROR 
    // MADE IN OUR APPLICATION...AND WE NEED TO PASS THIS ERROR TO OUR COMPONENT ...
    // TELLING SOMETHING WENT WRONG WITH THE DELETE REQUEST METHOD
    // Returned Obesrvable : return Observable ...
    // Error passed to out component: ...  .throw(new BadInputError()
    .catch(this.errorHandler);
  }

  private errorHandler(error: Response) {
    if(error.status === 400) {
      return Observable.throw(new BadInputError());
    }
    else if(error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    else return Observable.throw(new AppError(error));
  }
}
