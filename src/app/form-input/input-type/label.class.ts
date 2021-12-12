import { Inject } from "@angular/core";
import { FormInputType } from "./form-input-type.class";
import { IInputType } from "./IInput-type.interface";
import { inputType } from "./input-type.abstract";

export class label extends inputType{

    labelType: FormInputType;
    
    constructor(@Inject('IFormInput') inputType: IInputType){
        super(inputType);
        this.labelType = this.setlabel(inputType);
    }

    getInputType(): HTMLLabelElement {
        const label = document.createElement('label');
        label.className = this.labelType.class;
        label.setAttribute('for', this.labelType.for);
        label.innerText = this.labelType.label;
        
        return label;
    }

    setlabel(inputType: FormInputType){
        return new FormInputType({
             class: inputType.class,
             key: inputType.key,
             label: inputType.label,
             type: 'label',
             for: inputType.for,
             order: 1
           })
    }
}