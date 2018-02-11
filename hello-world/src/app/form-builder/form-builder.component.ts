import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent  {
  form;
  // APROACH WITH FORM BUILD
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name : ["teste"], 
      contact : fb.group({
        email : [],
        phone : []
      }),
      topics : fb.array([])
    });
  }

  // APPROACH WITH LITERAL APPROACH
  // form = new FormGroup({
  //   name : new FormControl(),
  //   topics : new FormArray([]),
  //   contact : new FormGroup({
  //     email : new FormControl(),
  //     phone : new FormControl()
  //   })
  // });



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
