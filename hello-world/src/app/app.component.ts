import { Component } from '@angular/core';
import { FavoriteObject } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app!!!';

  post = {
    isFavorited : true
  };

  onFavoriteChanged(object : FavoriteObject) {
    console.log("changed", object.status);
  }
}
