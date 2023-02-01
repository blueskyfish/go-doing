import { FormControl, ValidatorFn } from '@angular/forms';

export const buildControl = <T>(value: T, ...validators: ValidatorFn[]): FormControl<T> => {
  return new FormControl<T>(value, { nonNullable: true, validators })
}
