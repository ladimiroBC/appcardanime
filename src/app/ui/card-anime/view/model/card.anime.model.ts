import { ButtonTooltip, OptionsButton, OptionsModal } from './../../../../core/constants/app.text';
import { FormGroup } from "@angular/forms";
import { CoreInteractor } from "../../../../core/view/core.interactor";
import { CorePresenter } from "../../../../core/view/core.presenter";
import { InformationCard } from "../../../../domain/entity/information.card";
import { Actions } from '../../../../core/constants/actions';
import { Icon } from '../../../../core/constants/app.styles';
import { BsModalRef } from 'ngx-bootstrap/modal';

export abstract class CardAnimeOutputLogic {
  cardInformation?: InformationCard;
  cardsInformation!: InformationCard[];
  form!: FormGroup;
  idCard!: string;
  optionsModal = OptionsModal;
  optionsButton = OptionsButton;
  actions = Actions;
  icon = Icon;
  modalRef!: BsModalRef;
  tooltip = ButtonTooltip;
}

export interface CardAnimeInputLogic extends CorePresenter {
  getAllCards(): void;
  responseCards(response: InformationCard[]): void;
  saveCard(form: FormGroup): void;
  getByIdCard(id: string): void;
  responseByIdCard(response: InformationCard): void;
  updateCard(id:string, form: FormGroup): void;
  responseMessagesSuccessfull(messages: string, title: string): void;
  responseMessagesError(messages: string, title: string): void;
}

export interface CardAnimeInteractorLogic extends CoreInteractor {
  processAllCardsInformation(): void;
  processCreateCard(payload: InformationCard): void;
  processUpdateCard(id: string, payload: InformationCard): void;
  processByIdCard(id: string): void;
}
