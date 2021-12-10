import { FormInputType } from "./form-input-type.class";

export abstract class inputTypeBase {
    inputType : FormInputType;

    constructor(inputType: FormInputType){
        this.inputType = inputType;
    }

    abstract getInputType(): HTMLDivElement;
}