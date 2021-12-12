import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormInputType } from '../form-input/input-type/form-input-type.class';
import { FormControlService } from './form-control.service';
import { IFormControl } from './IFormControl.interface';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {

  @Input() formFields: FormInputType[] = [];
  form: FormGroup;
  payload = '';

  constructor(@Inject('IFormControl') private formFieldService: IFormControl, fb: FormBuilder) {
    this.form = fb.group({
      title: fb.control('initial value')
    });
   }

  ngOnInit(): void {
    this.form = this.formFieldService.toFormGroup(this.formFields);
  }

  onSubmit() {
    this.payload = JSON.stringify(this.form.getRawValue());
  }

}
