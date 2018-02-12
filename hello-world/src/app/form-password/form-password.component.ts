import { OldPassValidator } from './../custom-validators/old-password.validator';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.css']
})
export class FormPasswordComponent implements OnInit {
  loginForm : FormGroup;

  constructor(build: FormBuilder) {
    // APPROACH WITH NO FORM BUILDER
    // this.loginForm = new FormGroup({
    //   oldPass : new FormControl( "", [ Validators.required ], OldPassValidator.oldPass),
    //   newPass : new FormControl( "", [ Validators.required ]),
    //   newPassConfirmation : new FormControl("",[Validators.required])
    // });

    // APPROACH WITH FORM BUILDER
    this.loginForm = build.group({
        oldPass : ["", [Validators.required], OldPassValidator.oldPass],
        newPass : ["", [Validators.required]],
        newPassConfirmation : ["",[Validators. required]],
      }, 
      {
        validator: OldPassValidator.passConfirmation
      }
    );
  }
  
  // GETTERS
  get oldPass() {
    return this.loginForm.get("oldPass");
  }
  get newPass() {
    return this.loginForm.get("newPass");
  }
  get newPassConfirmation() {
    return this.loginForm.get("newPassConfirmation");
  }

  ngOnInit() {  }

  log() { 
    console.log(this.newPassConfirmation);
  }
}
