import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-reading-data',
  templateUrl: './reading-data.component.html',
  styleUrls: ['./reading-data.component.css']
})
export class ReadingDataComponent implements OnInit, OnDestroy {

  constructor(private firebase: AngularFireDatabase) { }
  
  private courses;
  private subsc: Subscription;

  ngOnInit() {
    this.approach_1();
    // this.approach_2();
  }

  approach_1(): void {
    this.subsc = this.firebase.list("/courses")
      .valueChanges()
      .subscribe( response => this.courses = response)
  }

  approach_2(): void {
    this.firebase.database.ref("courses")
      .on("value", (response) => this.courses = response.val());
  }


  ngOnDestroy() {
    console.log("des");
    this.subsc.unsubscribe();
  }

}
