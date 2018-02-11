import { AbstractControl, ValidationErrors } from '@angular/forms';


export class UserNameValidator {
    static spaces(control: AbstractControl) : ValidationErrors | null {
        let value = control.value as string,
            allSpaces = value.match(/\s/igm) as any,
            amountOfSpaces = (allSpaces) ? allSpaces.length: null;

        if(!amountOfSpaces) 
            return null;

        return {
            spaces : {
                hasSpaces : true,
                amount : amountOfSpaces
            }
        };
    }
    // THIS SIMULATES AN AJAX REQUEST
    static uniqueUser(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                // console.log(":",control);
                if(control.value === "mosh") 
                    resolve( { uniqueUser : true});
                else 
                    resolve(null);
            },2000);
        });
    }
}