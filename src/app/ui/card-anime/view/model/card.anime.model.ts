import { OptionsButton, OptionsModal } from './../../../../core/constants/app.text';
import { FormGroup } from "@angular/forms";
import { CoreInteractor } from "../../../../core/view/core.interactor";
import { CorePresenter } from "../../../../core/view/core.presenter";
import { InformationCard } from "../../../../domain/entity/information.card";
import { Actions } from '../../../../core/constants/actions';
import { BsModalRef } from 'ngx-bootstrap/modal';

export abstract class CardAnimeOutputLogic {
  cardInformation!: InformationCard;
  cardsInformation!: InformationCard[];
  form!: FormGroup;
  idCard!: string;
  optionsModal = OptionsModal;
  optionsButton = OptionsButton;
  actions = Actions;
  modalRef?: BsModalRef;
  messagesErrors!: string;
}

export interface CardAnimeInputLogic extends CorePresenter {
  getAllCards(): void;
  responseCards(response: InformationCard[]): void;
  getCard(id: string): void;
  responseCard(response: InformationCard): void;
  saveCard(form: FormGroup): void;
  updateCard(id: string, form: FormGroup): void;
  deleteCard(id: string): void;
  responseErrorMessages(error: string): void;
}

export interface CardAnimeInteractorLogic extends CoreInteractor {
  processAllCardsInformation(): Promise<void>;
  processUpdateCardInformation(id: string, card: InformationCard): Promise<void>;
  processDeleteCardInformation(id: string): void;
  processCreateCardInformation(card: InformationCard): Promise<void>;
  processByIdCardInformation(id: string): Promise<void>;
}
