import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reading-data-async',
  templateUrl: './reading-data-async.component.html',
  styleUrls: ['./reading-data-async.component.css']
})
export class ReadingDataAsyncComponent implements OnInit {

  private courses$: Observable<any>;
  private object$: Observable<any>;

  constructor(private db: AngularFireDatabase) { }


  ngOnInit() {
    this.courses$ = this.db.list("courses").valueChanges();
    this.object$ = this.db.object("authors/1").valueChanges();
    this.object_2$ = this.db.object("authors/2").valueChanges();
  }

}
