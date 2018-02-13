import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// SERVICES
import { CentralService } from './central.service';

@Injectable()

export class PostService extends CentralService {
  constructor(http: Http){
    super(http,"http://jsonplaceholder.typicode.com/posts");
  }
}
