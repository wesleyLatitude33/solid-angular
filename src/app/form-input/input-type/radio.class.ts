import { Inject } from "@angular/core";
import { FormInputType } from "./form-input-type.class";
import { IInputType } from "./IInput-type.interface";
import { inputType } from "./input-type.abstract";
import { label } from "./label.class";

export class radio extends inputType{
    
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
        
        const div2 = document.createElement('div');
        div2.className = 'form-check form-check-inline';
        div.appendChild(div2);

        for (let opt of this.inputType.options){
            const option = document.createElement('input');
            option.style.marginLeft = '5px';
            option.className = this.inputType.class;
            option.setAttribute('formControlName', this.inputType.key);
            option.type = this.inputType.type;
            option.id = opt.key;
            option.value = opt.value;
            option.name = this.inputType.key;
            div2.appendChild(option);

            const labelType = new label(new FormInputType({
                class: 'form-check-label',
                for: opt.key,
                label: opt.value,
                key: opt.key}));
            div2.appendChild(labelType.getInputType());

        }

        return div;
    }
}