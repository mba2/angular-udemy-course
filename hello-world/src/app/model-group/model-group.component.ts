import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'model-group',
  templateUrl: './model-group.component.html',
  styleUrls: ['./model-group.component.css']
})
export class ModelGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(personalInfo) { console.log(personalInfo); } 
}
