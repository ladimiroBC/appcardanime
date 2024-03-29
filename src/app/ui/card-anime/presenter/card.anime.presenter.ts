import { InformationCard } from './../../../domain/entity/information.card';
import { IApplicationAnimeCard } from '../../../core/constants/app.card';
import { CardAnimeInputLogic, CardAnimeOutputLogic } from '../view/model/card.anime.model';
import { CardAnimeInteractor } from './../interactor/card.anime.interactor';
import { Inject, Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import { formInformationCard } from '../view/form/formInformationCard';

@Injectable()
export class CardAnimePresenter implements CardAnimeInputLogic{
  private _view!: CardAnimeOutputLogic;

  constructor(
    @Inject(IApplicationAnimeCard.CardAnimeInteractorLogic)
    private _interactor: CardAnimeInteractor,
    private _formBuilder: FormBuilder)
  {
    this._interactor.setPresenter(this);
  }

  setView(component: CardAnimeOutputLogic): void {
    this._view = component;
  }

  getAllCards(): void {
    this._interactor.processAllCardsInformation();
  }

  responseCards(response: InformationCard[]): void {
    this._view.cardsInformation = response;
  }

  getCard(id: string): void {
    this._interactor.processByIdCardInformation(id);
  }

  responseCard(response: InformationCard): void {
    this._view.cardInformation = response;
  }

  saveCard(form: FormGroup): void {
    this._interactor.processCreateCardInformation(form.value);
  }

  updateCard(id: string, form: FormGroup): void {
    this._interactor.processUpdateCardInformation(id, form.value);
  }

  deleteCard(id: string): void {
    this._interactor.processDeleteCardInformation(id);
  }

  responseErrorMessages(error: string): void {
    console.log(error);
    this._view.messagesErrors = error;
  }
}


