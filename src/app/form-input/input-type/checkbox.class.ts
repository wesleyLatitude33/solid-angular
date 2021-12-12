import { Inject } from "@angular/core";
import { FormInputType } from "./form-input-type.class";
import { IInputType } from "./IInput-type.interface";
import { inputType } from "./input-type.abstract";
import { label } from "./label.class";

export class checkbox extends inputType{

    constructor(@Inject('IFormInput') inputType: IInputType){
        super(inputType);
    }

    getInputType(): HTMLDivElement {
        const div = document.createElement('div');

        const div2 = document.createElement('div');
        div2.className = 'form-check';
        div.appendChild(div2);

        
        const chk = document.createElement('input');
        chk.className = this.inputType.class;
        chk.setAttribute('formControlName', this.inputType.key);
        chk.type = this.inputType.type;
        chk.id = this.inputType.key;
        div2.appendChild(chk);
        
        const labelType = new label(new FormInputType({
                class: 'form-check-label',
                for: this.inputType.key,
                label: this.inputType.label,
                key: this.inputType.key}));
        div2.appendChild(labelType.getInputType()); 
        
        console.log(div);
        return div;
    }
   
}