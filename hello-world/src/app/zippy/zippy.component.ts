import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  @Input ("title") private title: string;

  private isActive:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleAccordion() {
    this.isActive = !this.isActive;
  }

}
