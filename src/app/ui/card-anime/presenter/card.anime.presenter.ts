import { FormBuilder, FormGroup } from '@angular/forms';
import { IApplicationAnimeCard } from '../../../core/constants/app.card';
import { InformationCard } from '../../../domain/entity/information.card';
import { CardAnimeInputLogic, CardAnimeOutputLogic } from '../view/model/card.anime.model';
import { CardAnimeInteractor } from './../interactor/card.anime.interactor';
import { Inject, Injectable } from "@angular/core";
import { formCreateInformationCard } from '../../../core/constants/validators';

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

  initFormCreate(): void {
    this._view.form = this._formBuilder.group(formCreateInformationCard);
  }

  getAllCards(): void {
    this._interactor.processAllCardsInformation();
  }

  processResponseCards(response: InformationCard[]): void {
    this._view.cardsInformation = response;
  }

  processCardCreate(form: FormGroup): void {
    this._interactor.processCreateCardInformation(form);
  }

  errorMessages(error: string): void {
    alert(`${error}`);
  }
}


