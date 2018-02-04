import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'if-directive',
  templateUrl: './if-directive.component.html',
  styleUrls: ['./if-directive.component.css']
})
export class IfDirectiveComponent implements OnInit {
  private flag : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.flag = !this.flag;
  }

}
