import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]
})
export class GithubComponent implements OnInit {
  private followers: object[];

  constructor(private service: GithubService) { }

  ngOnInit() {
    this.getFollowers();
  }

  private getFollowers(): void{
    this.service.get()
      .subscribe(response => this.followers = response.json());
  }

}
