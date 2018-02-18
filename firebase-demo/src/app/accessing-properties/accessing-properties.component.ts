import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
Observable
@Component({
  selector: 'app-accessing-properties',
  templateUrl: './accessing-properties.component.html',
  styleUrls: ['./accessing-properties.component.css']
})
export class AccessingPropertiesComponent implements OnInit {


  private author_1$: Observable<any>;
  private author_2$: Observable<any>;


  constructor(private db: AngularFireDatabase) { }


  ngOnInit() {
    this.author_1$ = this.db.object("authors/1").valueChanges();
    this.author_2$ = this.db.object("authors/2").valueChanges();
  }
}
