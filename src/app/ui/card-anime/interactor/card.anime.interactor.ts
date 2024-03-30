import { Inject, Injectable } from "@angular/core";
import { IApplicationAnimeCard } from "../../../core/constants/app.card";
import { InformationCard } from "../../../domain/entity/information.card";
import { CardAnimeInputLogic, CardAnimeInteractorLogic } from "../view/model/card.anime.model";
import { ApplicationCardHttpService } from "../../../application/services/app.card.httpclient.service";
import { CardMessagesSuccessful } from "../../../core/enum/messages.successfull";
import { CardMessagesError } from "../../../core/enum/messages.error";

@Injectable()
export class CardAnimeInteractor implements CardAnimeInteractorLogic{
  private _presenter!: CardAnimeInputLogic;

  constructor(
    @Inject(IApplicationAnimeCard.ApplicationAnimeCardHttpClient)
    private _httpService: ApplicationCardHttpService
  ) { }

  setPresenter(presenter: CardAnimeInputLogic): void {
    this._presenter = presenter;
  }

  processAllCardsInformation(): void {
    this._httpService.getAll().subscribe({
      next: ((data: InformationCard[]) => {
        let cards = data;
        this._presenter.responseCards(cards);
      }),
      error: () => {
        this._presenter.responseMessagesError(CardMessagesError.NOT_SHOW_CARDS, CardMessagesError.TITTLE);
      }
    })
  }

  processCreateCard(payload: InformationCard): void {
    this._httpService.create(payload).subscribe({
      next: (() =>{
        this._presenter.responseMessagesSuccessfull(CardMessagesSuccessful.CREATE_CARD, CardMessagesSuccessful.TITTLE);
      }),
      error: (() => {
        this._presenter.responseMessagesError(CardMessagesError.NOT_CREATE_CARD, CardMessagesError.TITTLE);
      })
    })
  }

  processByIdCard(id: string): void {
    throw new Error("Method not implemented.");
  }

  processUpdateCard(id: string, payload: InformationCard): void {
    throw new Error("Method not implemented.");
  }
}
