import { AbstractControl, ValidationErrors } from "@angular/forms";

export type FormInformationCard = {
  name: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[],
  autor: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[],
  launch: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[],
  gender: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[],
  img: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[],
}
