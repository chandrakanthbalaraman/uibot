import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Injectable()
export class AppFormService {
   // get all values of the formGroup, loop over them
  // then mark each field as touched
  public markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.markFormGroupTouched(control);            //{6}
      }
    });
  }
  

  public validateForm(formToValidate: FormGroup, formErrors: any, checkDirty?: boolean) {
    const form = formToValidate;

    for (const field in formErrors) {
      if (field) {
        const control = form.get(field);
        if(control instanceof FormControl){
          if (control && !control.valid) {
            if (!checkDirty || (control.dirty || control.touched)) {
              formErrors[field] = {};
              for (const key in control.errors) {
                  formErrors[field][key] = control.errors[key];
              }
            }
          }else{
            formErrors[field] = {};
          }
        } else if (control instanceof FormGroup) { 
          for (const childFields in formErrors[field]) {
            this.validateForm(control,formErrors[field],checkDirty);
          }
        }
      }
    }
    return formErrors;
  }

}