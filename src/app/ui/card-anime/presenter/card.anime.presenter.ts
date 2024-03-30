import { FormGroup } from '@angular/forms';
import { IApplicationAnimeCard } from '../../../core/constants/app.card';
import { InformationCard } from '../../../domain/entity/information.card';
import { CardAnimeInputLogic, CardAnimeOutputLogic } from '../view/model/card.anime.model';
import { CardAnimeInteractor } from './../interactor/card.anime.interactor';
import { Inject, Injectable } from "@angular/core";
import { ApplicationMessagesService } from '../../../common/utils/app.messages.service';
import { timer } from 'rxjs';

@Injectable()
export class CardAnimePresenter implements CardAnimeInputLogic{
  private _view!: CardAnimeOutputLogic;

  constructor(
    @Inject(IApplicationAnimeCard.CardAnimeInteractorLogic)
    private _interactor: CardAnimeInteractor,
    @Inject(IApplicationAnimeCard.ApplicationMessages)
    private _toastService: ApplicationMessagesService,)
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
    console.log(response);
    this._view.cardsInformation = response;
  }

  saveCard(form: FormGroup): void {
    this._interactor.processCreateCard(form.value);
  }

  updateCard(id: string, form: FormGroup<any>): void {
    throw new Error('Method not implemented.');
  }

  responseMessagesSuccessfull(messages: string, title: string): void {
    this._toastService.showMessagesSuccessfull(messages, title);
    this.reoloadPage();
  }

  responseMessagesError(messages: string, title: string): void {
    this._toastService.showMessagesError(messages, title);
    this.reoloadPage();
  }

  reoloadPage() {
    const refresh = timer(3000);
    refresh.subscribe(() => {
      location.reload();
    })
  }
}


