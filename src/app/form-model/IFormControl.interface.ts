import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { FormInputType } from "../form-input/input-type/form-input-type.class";

export interface IFormControl {
    toFormGroup(inputs: FormInputType[]): FormGroup;
    setFormFields(formFields : Observable<FormInputType[]>): Observable<FormInputType[]>;
}