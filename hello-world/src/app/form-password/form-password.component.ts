import { OldPassValidator } from './../custom-validators/old-password.validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.css']
})
export class FormPasswordComponent implements OnInit {
  loginForm : formGroup;

  constructor() {
    this.loginForm = new FormGroup({
      oldPass : new FormControl( "", [ Validators.required ], OldPassValidator.oldPass),
      newPass : new FormControl( "", [ Validators.required ]),
      newPassConfirmation : new FormControl("",[Validators.required])
    });
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
  
  passConfirmation() {
    if( this.newPass !== this.newPassConfirmation) {
      this.loginForm.setErrors({
        newPassMatches : false
      });
    }
  }
}
