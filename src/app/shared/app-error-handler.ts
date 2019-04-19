import { ErrorHandler } from '@angular/core';

//Global 
export class AppErrorHandler implements ErrorHandler{
    handleError(error) {
        alert('An Unexpected error occured');
        console.log('An Unexpected error occured')
    }
}