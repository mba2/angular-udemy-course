import { TitleCasePipe } from './../custom-pipes/title_case.pipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-case',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.css']
})
export class TitleCaseComponent implements OnInit {
  private test:string;

  constructor() { }

  ngOnInit() {
  
  }

}
