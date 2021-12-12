import { Component, Inject, OnInit } from '@angular/core';
import { FormInputType } from 'src/app/form-input/input-type/form-input-type.class';
import { IFormFields } from '../IFormFields.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  iFormFields: FormInputType[] = [];
  iservice: any;

  constructor(@Inject('IClientToken') private service: IFormFields) { 
    this.iservice = service;
  }

  ngOnInit(): void {
     this.iFormFields = this.iservice.getFormFields();
  }

}
