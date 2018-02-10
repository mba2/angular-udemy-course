import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'safe-traversal',
  templateUrl: './safe-traversal.component.html',
  styleUrls: ['./safe-traversal.component.css']
})
export class SafeTraversalComponent implements OnInit {
  object = {
    test : {
      prop : 1
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
