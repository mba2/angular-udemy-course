import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorited : boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log("Clicked");
    this.isFavorited = !this.isFavorited;
    this.change.emit({status: this.isFavorited});
  }
}

export interface FavoriteObject {
  status : boolean
}
