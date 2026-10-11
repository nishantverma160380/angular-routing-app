import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const noWhitespaceValidator: ValidatorFn =
    (control: AbstractControl): ValidationErrors | null => {
        const value = String(control.value ?? '').trim();
        if (
            value.length > 0 &&
            value.trim().length === 0
        ) {
            return {
                whitespace: true
            };
        }
        return null;
    }