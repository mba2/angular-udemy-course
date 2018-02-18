import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList, AngularFireObject, AngularFireAction } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adding-object',
  templateUrl: './adding-object.component.html',
  styleUrls: ['./adding-object.component.css']
})
export class AddingObjectComponent implements OnInit {
  private appConfigRef : AngularFireObject<any>;
  private appConfig$ : Observable<any>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.appConfigRef = this.db.object("/app-config");
    this.appConfig$ = this.appConfigRef.valueChanges();
  }

  add(version:HTMLInputElement, name:HTMLInputElement) {
    this.appConfigRef.set(
      { 
        "version" : version.value,
        "name" : name.value
      });
  }

}
