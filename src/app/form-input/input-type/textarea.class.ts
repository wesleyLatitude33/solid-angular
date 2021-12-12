import { Inject } from "@angular/core";
import { FormInputType } from "./form-input-type.class";
import { IInputType } from "./IInput-type.interface";
import { inputType } from "./input-type.abstract";
import { label } from "./label.class";

export class textarea extends inputType{
    
    constructor(@Inject('IFormInput') inputType: IInputType){
        super(inputType);
    }

    getInputType(): HTMLDivElement {
        const div = document.createElement('div');

        const labelType = new label(new FormInputType({
            for: this.inputType.key,
            label: this.inputType.label,
            key: this.inputType.key}));
        div.appendChild(labelType.getInputType());

        const txt = document.createElement('textarea');
        txt.className = this.inputType.class;
        txt.setAttribute('formControlName', this.inputType.key);
        txt.rows = 5;
        txt.id = this.inputType.key;
        div.appendChild(txt);
        
        return div;
    }
}