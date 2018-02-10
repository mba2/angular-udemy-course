import { Component, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.css']
})
export class MyReactiveFormComponent {
  form = new FormGroup({
    username : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required)
  })
}
