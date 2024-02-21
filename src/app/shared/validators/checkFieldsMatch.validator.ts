import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkFieldsMatchValidator(field1: string, field2: string): ValidatorFn 
{
  return (control: AbstractControl<unknown, { [key: string]: any; }>): ValidationErrors | null => 
  {
    const control1 = control.get(field1)
    const control2 = control.get(field2)

      if (control1 && control2 && control1.value !== control2.value) {
        control2.setErrors({ 'noMatch': true })
        return { 'noMatch': true }
      } else {
        control2?.setErrors(null)
        return null;
      }
  }
}
