import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormInputType } from '../form-input/input-type/form-input-type.class';
import { IFormControl } from './IFormControl.interface';

@Injectable({
  providedIn: 'root'
})
export class FormControlService implements IFormControl {

  constructor() { }

  toFormGroup(inputs: FormInputType[]): FormGroup {
    const group: any = {};
    inputs.forEach(input => {
      let validator: ValidatorFn[] = input.required ? [Validators.required] : [];
      switch (input.validator) {
        case 'email':
          validator.push(Validators.email);
          break;
        default:
          break;
      }
      group[input.key] = validator.length > 0 ? new FormControl(input.value || '', validator)
                                                  : new FormControl(input.value || '');
    });

    return new FormGroup(group);
  }

  setFormFields(formFields : Observable<FormInputType[]>) {
    return formFields;
  }

}
