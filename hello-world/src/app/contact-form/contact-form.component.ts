import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input("test")
  private categories: object[] = [
    { id : 1 , name :"Development"},
    { id : 2 , name :"Art"},
    { id : 3 , name :"Languages"},
  ];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(x) { 
    console.log(x);
    console.log(x.value);
  }
}
