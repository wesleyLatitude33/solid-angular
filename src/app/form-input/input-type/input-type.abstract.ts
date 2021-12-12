import { Inject } from "@angular/core";
import { FormInputType } from "./form-input-type.class";
import { IInputType } from "./IInput-type.interface";

export abstract class inputType{
   inputType : IInputType;

   constructor(@Inject('IFormInput') inputType: IInputType){
        this.inputType = inputType;
   }
    abstract getInputType(): HTMLElement;
}