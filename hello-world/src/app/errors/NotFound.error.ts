import { AppError } from './AppError.error';

export class NotFoundError extends AppError{
    constructor() {
        super();
        console.log("not found class");
    }
}