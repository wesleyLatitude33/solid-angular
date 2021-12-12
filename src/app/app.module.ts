import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormModelComponent } from './form-model/form-model.component';
import { FormularioComponent } from './cliente/formulario/formulario.component';
import { ClienteService } from './cliente/cliente.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormInputType } from './form-input/input-type/form-input-type.class';
import { FormControlService } from './form-model/form-control.service';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    FormModelComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: 'IClientToken', useClass: ClienteService},
    {provide: 'IFormControl', useClass: FormControlService},
    {provide: 'IFormInput', useFactory: FormInputType}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
