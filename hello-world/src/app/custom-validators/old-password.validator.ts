import { ValidationErrors, AbstractControl } from '@angular/forms';

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
}