import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormInputType } from '../form-input/input-type/form-input-type.class';
import { IFormFields } from './IFormFields.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService implements IFormFields {

  constructor() { }

  getFormFields(): FormInputType[] {
    const inputs: FormInputType[] = [
        new FormInputType({
          controlType: "textbox",
          key: 'name',
          label: 'Name',
          class: 'form-control',
          required: true,
          order: 1
        }),
         new FormInputType({
          controlType: "textbox",
          key: 'email',
          label: 'Email',
          type: 'email',
          class: 'form-control',
          required: true,
          validator: "email",
          order: 2
        }),
        new FormInputType({
          controlType: "textarea",
          key: 'message',
          label: 'Mesage',
          type: 'textarea',
          class: 'form-control',
          order: 3
        }),
        new FormInputType({
          controlType: "textbox",
          key: 'birthday',
          label: 'Data de aniversário',
          type: 'date',
          class: 'form-control',
          order: 4
        }),
        new FormInputType({
          controlType: "radio",
          key: 'yesno',
          label: 'Aceita receber email?',
          type: 'radio',
          class: 'form-check-input',
          options: [{value: 'Sim', key: 'sim'}, {value: 'Não', key: 'nao'}],
          order: 5
        }),
        new FormInputType({
          controlType: "checkbox",
          key: 'example',
          label: 'Exemplo muito bom!',
          type: 'checkbox',
          class: 'form-check-input',
          order: 6
        }),
        new FormInputType({
          controlType: "dropdown",
          key: 'example',
          label: 'Cidade',
          type: 'dropdown',
          class: 'custom-select',
          options: [{value: 'Votuporanga', key: '123'}, {value: 'Fernandópolis', key: '456'}, {value: 'Jales', key: '789'}],
          order: 6
        })
      ];
  
      return inputs.sort((a,b) => a.order - b.order);
  }

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
      group[input.key] = validator.length > 0 ? new FormControl(input.value || '',validator)
                                            : new FormControl(input.value || '');
    });
    return new FormGroup(group);
  }
}
