import { IInputType } from "./IInput-type.interface";

export class FormInputType implements IInputType{
    value : string;
    key : string;
    label : string;
    required : boolean;
    validator : string;
    order: number;
    controlType : string;
    type : string;
    class: string;
    for: string;
    options: { key : string; value : string}[];

    constructor(
        options: {
            class?: string,
            value?: string;
            key?: string;
            label?: string;
            required?: boolean;
            validator?: string;
            order?: number;
            controlType?: string;
            type?: string;
            for?: string;
            options?: { key : string; value : string}[];
        } = {}
    ) {
        this.class = options.class || '';
        this.value = options.value || '';
        this.key = options.key || '';
        this.for = options.for || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.validator = options.validator || '';
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.options = options.options || [];
    }
    getInputType(): HTMLElement {
        throw new Error("Method not implemented.");
    }
}