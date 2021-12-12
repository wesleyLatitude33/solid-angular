import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { checkbox } from './input-type/checkbox.class';
import { dropdpown } from './input-type/dropdown.class';
import { FormInputType } from './input-type/form-input-type.class';
import { IInputType } from './input-type/IInput-type.interface';
import { radio } from './input-type/radio.class';
import { textarea } from './input-type/textarea.class';
import { textbox } from './input-type/textbox.class';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  @Input() input: any;
  @Input() form: FormGroup;

  constructor(fb: FormBuilder, @Inject('IFormInput') input: IInputType) { 
    this.form = fb.group({
      title: fb.control('initial value')
    });
  }

  ngOnInit(): void {
    this.initComponentHTML(this.input);
  }

  initComponentHTML (inputModel: FormInputType){
    let ocp: HTMLElement | null;
    let input;

    ocp = document.getElementById('form');
    switch (inputModel.controlType) {
      case 'textbox': input = new textbox(this.input); ocp?.appendChild(input.getInputType()); break;
      case 'dropdown': input = new dropdpown(this.input); ocp?.appendChild(input.getInputType()); break;
      case 'checkbox': input = new checkbox(this.input); ocp?.appendChild(input.getInputType()); break;
      case 'radio': input = new radio(this.input); ocp?.appendChild(input.getInputType()); break;
      case 'textarea': input = new textarea(this.input); ocp?.appendChild(input.getInputType()); break;
    }
  }

  get isValid() { return this.form.controls[this.input.key].valid; }

}
