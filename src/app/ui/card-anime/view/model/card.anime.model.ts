import { OptionsButton, OptionsModal } from './../../../../core/constants/app.text';
import { FormGroup } from "@angular/forms";
import { CoreInteractor } from "../../../../core/view/core.interactor";
import { CorePresenter } from "../../../../core/view/core.presenter";
import { InformationCard } from "../../../../domain/entity/information.card";
import { Actions } from '../../../../core/constants/actions';

export abstract class CardAnimeOutputLogic {
  cardInformation!: InformationCard;
  cardsInformation!: InformationCard[];
  form!: FormGroup;
  optionsModal = OptionsModal;
  optionsButton = OptionsButton;
  actions = Actions;
}

export interface CardAnimeInputLogic extends CorePresenter {
  getAllCards(): void;
  processResponseCards(response: InformationCard[]): void;
  initFormCreate(): void;
  processCardCreate(form: FormGroup): void;
  errorMessages(error: string): void;
}

export interface CardAnimeInteractorLogic extends CoreInteractor {
  processAllCardsInformation(): void;
  processUpdateCardInformation(id: string, item: InformationCard): void;
  processDeleteCardInformation(id: string): void;
  processCreateCardInformation(form: FormGroup): void;
  processByIdCardInformation(id: string): void;
}
