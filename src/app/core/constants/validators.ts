import { Validators } from "@angular/forms";
import { FormInformationCard } from "../models/form.card";

export const formCreateInformationCard: FormInformationCard = {
  name: ['', [Validators.required]],
  autor: ['', [Validators.required]],
  launch: ['', [Validators.required]],
  gender: ['', [Validators.required]],
  img: ['', [Validators.required]]
}
