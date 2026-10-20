import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const noWhitespaceValidator: ValidatorFn =
    (control: AbstractControl): ValidationErrors | null => {
        const value = String(control.value ?? '');
        return value.length > 0 && value.trim().length === 0 ?
            { whitespace: true } : null;
    };

export const completeAddressValidator: ValidatorFn =
    (control: AbstractControl): ValidationErrors | null => {
        const values = ['street', 'city', 'postcode'].map((field) =>
            String(control.get(field)?.value ?? '')
        );

        const allEmpty = values.every((value) => value.length === 0);
        const allFilled = values.every((value) => value.length > 0);

        return allEmpty || allFilled
            ? null
            : { incompleteAddress: true };
    };