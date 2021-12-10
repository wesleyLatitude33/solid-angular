import { FormInputType } from "./form-input-type.class";
import { inputTypeBase } from "./input-type.abstract";

export class checkbox extends inputTypeBase{
    
    constructor(inputType: FormInputType){
        super(inputType);
    }

    getInputType(): HTMLDivElement {
        const div = document.createElement('div');

        const div2 = document.createElement('div');
        div2.className = 'form-check';
        div.appendChild(div2);

        const chk = document.createElement('input');
        chk.className = 'form-check-input';
        chk.setAttribute('formControlName', this.inputType.key);
        chk.type = this.inputType.type;
        chk.id = this.inputType.key;
        div2.appendChild(chk);

        const label = document.createElement('label');
        label.className = 'form-check-label';
        label.setAttribute("for", this.inputType.key);
        label.innerText = this.inputType.label;
        div2.appendChild(label);
        
        return div;
    }
    
}