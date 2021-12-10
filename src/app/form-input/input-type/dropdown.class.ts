import { FormInputType } from "./form-input-type.class";
import { inputTypeBase } from "./input-type.abstract";

export class dropdpown extends inputTypeBase{
    
    constructor(inputType: FormInputType){
        super(inputType);
    }

    getInputType(): HTMLDivElement {
        const div = document.createElement('div');

        const label = document.createElement('label');
        label.setAttribute("for", this.inputType.key);
        label.innerText = this.inputType.label;
        div.appendChild(label);        

        const sel = document.createElement('select');
        sel.className = 'custom-select';
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