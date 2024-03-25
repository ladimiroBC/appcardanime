import { Validators } from "@angular/forms";
import { FormInformationCard } from "../models/form.card";
import { InformationCard } from "../../domain/entity/information.card";

export const formCreateInformationCard: FormInformationCard = {
  name: ['', [Validators.required]],
  autor: ['', [Validators.required]],
  launch: ['', [Validators.required]],
  gender: ['', [Validators.required]],
  img: ['', [Validators.required]]
}

export function formUpdateInformationCard(
  information: InformationCard = {
    name: '', autor: '', launch: '', gender: '', img: ''
  }
): FormInformationCard {
  return {
    name: [information.name!],
    autor: [information.autor!],
    launch: [information.launch!],
    gender: [information.gender!],
    img: [information.img!]
  }
}

