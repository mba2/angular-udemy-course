import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  private arr: object[];

  constructor() { 
  }

  ngOnInit() {
  }

  loadChars() {
    this.arr = [
      {"id" : 1, "name" : 'Jesse'},
      {"id" : 2, "name" : 'Hank'},
      {"id" : 3, "name" : 'Walter'},
      {"id" : 4, "name" : 'Skarlet'}
    ];
  }

  trackBy(index,item) {
    if(item.hasOwnProperty("id")) return item.id;
  }
}
