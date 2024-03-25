import { OptionsButton, OptionsModal } from './../../../../core/constants/app.text';
import { FormGroup } from "@angular/forms";
import { CoreInteractor } from "../../../../core/view/core.interactor";
import { CorePresenter } from "../../../../core/view/core.presenter";
import { InformationCard } from "../../../../domain/entity/information.card";
import { ActionsButtons } from '../../../../core/constants/actions';

export abstract class CardAnimeOutputLogic {
  cardInformation!: InformationCard;
  cardsInformation!: InformationCard[];
  form!: FormGroup;
  optionsModal = OptionsModal;
  optionsButton = OptionsButton;
  actions = ActionsButtons;
}

export interface CardAnimeInputLogic extends CorePresenter {
  getAllCards(): void;
  responseCards(response: InformationCard[]): void;
  responseCard(response: InformationCard | null): void;
  initFormCreate(): void;
  initFormUpdate(id: string): void;
  searchIdCard(id: string): void;
  submitCardCreate(form: FormGroup): void;
  submitCardUpdate(form: FormGroup, id: string): void;
  responseErrorMessages(error: string): void;
}

export interface CardAnimeInteractorLogic extends CoreInteractor {
  processAllCardsInformation(): void;
  processUpdateCardInformation(id: string, item: InformationCard): void;
  processDeleteCardInformation(id: string): void;
  processCreateCardInformation(form: FormGroup): void;
  processByIdCardInformation(id: string): Promise<InformationCard | null>;
}
