import { FormInputType } from "./form-input-type.class";
import { inputTypeBase } from "./input-type.abstract";

export class textarea extends inputTypeBase{
    
    constructor(inputType: FormInputType){
        super(inputType);
    }

    getInputType(): HTMLDivElement {
        const div = document.createElement('div');

        const label = document.createElement('label');
        label.setAttribute("for", this.inputType.key);
        label.innerText = this.inputType.label;
        div.appendChild(label); 

        const txt = document.createElement('textarea');
        txt.className = 'form-control';
        txt.setAttribute("formControlName", this.inputType.key);
        txt.rows = 5;
        txt.id = this.inputType.key;
        div.appendChild(txt);
        
        return div;
    }
}