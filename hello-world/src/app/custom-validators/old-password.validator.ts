import { ValidationErrors, AbstractControl } from '@angular/forms';
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';

export class OldPassValidator {
    static oldPass(control: AbstractControl) : Promise <ValidationErrors | null> {

        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                if(control.value !== "123") { 
                    console.log(control);
                    resolve({notOldPass : true});
                }else {
                    resolve(null);    
                }
            }, 2000);
        });
    }
        
    static passConfirmation(control:AbstractControl) {
        let newPass = control.get("newPass"),
            confirmPass = control.get("newPassConfirmation");

        if(newPass.value !== confirmPass.value) 
            return { passDontMacth : true };
    
        return null;
    }

    
//   passConfirmation() {
//     if( this.newPass !== this.newPassConfirmation) {
//       this.loginForm.setErrors({
//         newPassMatches : false
//       });
//     }
//   }
}