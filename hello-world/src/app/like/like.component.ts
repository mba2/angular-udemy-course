import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() likesAmount : number;
  @Input() isLiked : boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() : void {
    this.isLiked = !this.isLiked;
    this.likesAmount+= (this.isLiked) ? -1 : 1;
  }
}
