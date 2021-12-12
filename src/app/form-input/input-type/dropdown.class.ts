import { Inject } from "@angular/core";
import { FormInputType } from "./form-input-type.class";
import { IInputType } from "./IInput-type.interface";
import { inputType } from "./input-type.abstract";
import { label } from "./label.class";

export class dropdpown extends inputType{
    
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

        const sel = document.createElement('select');
        sel.className = this.inputType.class;
        sel.id = this.inputType.key;
        sel.setAttribute('formControlName', this.inputType.key);
        div.appendChild(sel);

        for (let opt of this.inputType.options){
            const option = document.createElement('option');
            option.value = opt.key;
            option.innerText = opt.value;
            sel.appendChild(option);
        }
        
        return div;
    }

}