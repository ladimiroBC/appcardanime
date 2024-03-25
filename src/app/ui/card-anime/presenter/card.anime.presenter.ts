import { FormBuilder, FormGroup } from '@angular/forms';
import { IApplicationAnimeCard } from '../../../core/constants/app.card';
import { InformationCard } from '../../../domain/entity/information.card';
import { CardAnimeInputLogic, CardAnimeOutputLogic } from '../view/model/card.anime.model';
import { CardAnimeInteractor } from './../interactor/card.anime.interactor';
import { Inject, Injectable } from "@angular/core";
import { formCreateInformationCard, formUpdateInformationCard } from '../../../core/constants/validators';

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

  searchIdCard(id: string): void {
    this._interactor.processByIdCardInformation(id);
  }

  responseCard(response: InformationCard | null): void {
    this._view.cardInformation = response as any;
  }

  responseCards(response: InformationCard[]): void {
    this._view.cardsInformation = response;
  }

  submitCardCreate(form: FormGroup): void {
    this._interactor.processCreateCardInformation(form);
  }

  submitCardUpdate(form: FormGroup, id: string): void {
    console.log(id);
    this._interactor.processUpdateCardInformation(id, form.value);
  }

  initFormUpdate(id: string): void {
    console.log(id);
    this._interactor.processByIdCardInformation(id)
      .then((data) => {
        let card = data as unknown as InformationCard;
        this._view.form = this._formBuilder.group(formUpdateInformationCard(card))
      })
      .catch((error) => console.log(error));
  }

  responseErrorMessages(error: string): void {
    alert(`${error}`);
  }
}


