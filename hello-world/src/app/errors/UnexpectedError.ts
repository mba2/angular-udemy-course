import { ErrorHandler } from '@angular/core';

export class UnexpectedError implements ErrorHandler{
    handleError(error) {
        alert("Unexpected Generic Error");
        console.log(error);
    }
}