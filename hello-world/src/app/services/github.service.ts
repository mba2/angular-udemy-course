import { Http } from '@angular/http';
import { CentralService } from './central.service';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubService extends CentralService{

  constructor(http: Http) {
    super(http,"https://api.github.com/users/mosh-hamedani/followers");
  }

}
