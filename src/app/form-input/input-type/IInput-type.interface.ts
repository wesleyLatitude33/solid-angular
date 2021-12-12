export interface IInputType{
    
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

    getInputType(): HTMLElement;
}