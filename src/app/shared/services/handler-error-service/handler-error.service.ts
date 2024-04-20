import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandlerErrorService {

  public handleValidationErrors(error: any): Observable<never> {
  let errors: string[] = [];

  const validationErrors = error.error.errors;
  if (validationErrors && typeof validationErrors === 'object') {
    Object.keys(validationErrors).forEach(key => {
      const errorMessage = validationErrors[key];
      errors.push(errorMessage);
    });
    return throwError(() => errors);
  }
  return throwError(() => error);
  }

  public displayErrors(errors : string[], arrayErrors : string[]){
  if(errors.length > 0){
  errors.forEach(message => {
            console.error(message)
            arrayErrors.push(message)
          });
  }
}


}
