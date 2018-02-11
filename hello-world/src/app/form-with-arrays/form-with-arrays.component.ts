import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'form-with-arrays',
  templateUrl: './form-with-arrays.component.html',
  styleUrls: ['./form-with-arrays.component.css']
})
export class FormWithArraysComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    topics : new FormArray(
      []    
    ) 
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
    console.log( JSON.stringify(this.form.value) );
    console.log(this.topics)
  }

  removeTopic(topic: FormControl) {
    let i = this.topics.controls.indexOf(topic);
    this.topics.removeAt(i); 
  }
  // GETTER
  get topics() {
    return this.form.get("topics") as FormArray; 
  }

}
