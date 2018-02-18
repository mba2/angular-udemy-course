import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private courses: any;
  constructor(private db: AngularFireDatabase) {
    this.db.list("courses")
      .valueChanges()
      .subscribe(response => this.courses = response)
      
    // db.database.ref("courses")
    //   .on("value", response => {
    //    console.log(response.val());
    //     this.courses = response.val()
    //   })
  }
}
