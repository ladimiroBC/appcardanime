import { AbstractControl, ValidationErrors } from "@angular/forms";

export type AuthValidator = {
  email: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[],
  password: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[],
}
