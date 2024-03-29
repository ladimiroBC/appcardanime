import { FormInformationCard } from '../../../../core/models/form.card';
import { Validators } from "@angular/forms";

export const formInformationCard: FormInformationCard = {
  name: ['', [Validators.required]],
  autor: ['', [Validators.required]],
  launch: ['', [Validators.required]],
  gender: ['', [Validators.required]],
  img: ['', [Validators.required]]
}


