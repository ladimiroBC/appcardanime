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
        this.processAllCardsInformation();
      }),
      error: (() => {
        this._presenter.responseMessagesError(CardMessagesError.NOT_CREATE_CARD, CardMessagesError.TITTLE);
      })
    })
  }

  processByIdCard(id: string): void {
    this._httpService.getById(id).subscribe({
      next: (data: any) => {
        let card = {} as InformationCard;
        data.forEach((element: InformationCard) => {
          card = {
            name: element.name,
            autor: element.autor,
            launch: element.launch,
            gender: element.gender,
            img: element.img
          }
          this._presenter.responseByIdCard(card);
        });
      },
      error: () => {
        this._presenter.responseMessagesError(CardMessagesError.NOT_SHOW_CARD, CardMessagesError.TITTLE);
      }
    })
  }

  processUpdateCard(id: string, payload: InformationCard): void {
    this._httpService.update(id, payload).subscribe({
      next: (() => {
        this._presenter.responseMessagesSuccessfull(CardMessagesSuccessful.EDIT_CARD, CardMessagesSuccessful.TITTLE);
        this.processAllCardsInformation();
      }),
      error: () => {
        this._presenter.responseMessagesError(CardMessagesError.NOT_EDIT_CARD, CardMessagesError.TITTLE);
      }
    })
  }
}
