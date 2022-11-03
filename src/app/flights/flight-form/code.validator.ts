import { FormControl, ValidationErrors } from "@angular/forms";
import { setTokenAutoRefreshEnabled } from "firebase/app-check";

export const flightCodeValidator = (formControl: FormControl): ValidationErrors | null => {
    return (formControl.value as string).startsWith('SK') ? null : { incorrectCode: true }
}