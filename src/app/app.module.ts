import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormModelComponent } from './form-model/form-model.component';
import { FormularioComponent } from './cliente/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    FormModelComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
