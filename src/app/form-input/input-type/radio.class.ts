import { FormInputType } from "./form-input-type.class";
import { inputTypeBase } from "./input-type.abstract";

export class radio extends inputTypeBase{
    
    constructor(inputType: FormInputType){
        super(inputType);
    }

    getInputType(): HTMLDivElement {
        const div = document.createElement('div');

        const label = document.createElement('label');
        label.setAttribute("for", this.inputType.key);
        label.innerText = this.inputType.label;
        div.appendChild(label); 
        
        const div2 = document.createElement('div');
        div2.className = 'form-check form-check-inline';
        div.appendChild(div2);

        for (let opt of this.inputType.options){
            const option = document.createElement('input');
            option.className = 'form-check-input';
            option.setAttribute("formControlName", this.inputType.key);
            option.type = this.inputType.type;
            option.id = opt.value;
            option.value = opt.value;
            option.name = this.inputType.key;
            div2.appendChild(option);

            const label = document.createElement('label');
            option.className = 'form-check-label';
            label.setAttribute("for", this.inputType.key);
            label.innerText = opt.value;
            div2.appendChild(label); 
        }

        return div;
    }
}