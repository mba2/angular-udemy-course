import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  prop_1 : boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
