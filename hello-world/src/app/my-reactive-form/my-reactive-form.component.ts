import { NumberValidator } from './../custom-validators/number.validator';
import { UserNameValidator } from './../custom-validators/username.validators';
import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.css']
})
export class MyReactiveFormComponent {
  form = new FormGroup({
    userName : new FormControl("",[
      UserNameValidator.spaces,
      Validators.required,
      Validators.minLength(4)
      ],UserNameValidator.uniqueUser
    ),
    password : new FormControl("Initial Value"),
    nestedGroup : new FormGroup({
      exampleOne : new FormControl("",NumberValidator.onlyNumbers)
    })
  });

  get userName() {
    return this.form.get("userName");
  } 

  /** TO RETRIEVE NESTED ELEMENTS.. YOU CHAIN IT INSIDE THE GET METHOD.. DON'T TRAVERSE INSIDE THE OBJECT . 
  * e.g 
  * return this.form.nestedGroup.example;     ---> this won't work
  */
  get exampleOne() {
    return this.form.get("nestedGroup.exampleOne");
  }

  log() { console.log(this.userName);}
}
