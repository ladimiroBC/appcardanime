import { Inject, Injectable } from "@angular/core";
import { IApplicationAnimeCard } from "../../../core/constants/app.card";
import { ApplicationCardSupabaseService } from "../../../application/services/app.card.supabase.service";
import { InformationCard } from "../../../domain/entity/information.card";
import { CardAnimeInputLogic, CardAnimeInteractorLogic } from "../view/model/card.anime.model";
import { MessagesError } from "../../../core/constants/app.text";
import { FormGroup } from "@angular/forms";

@Injectable()
export class CardAnimeInteractor implements CardAnimeInteractorLogic{
  private _presenter!: CardAnimeInputLogic;
  errorMsn = MessagesError;

  constructor(
    @Inject(IApplicationAnimeCard.ApplicationAnimeCardSupabase)
    private _supabaseService: ApplicationCardSupabaseService
  ) { }

  setPresenter(presenter: CardAnimeInputLogic): void {
    this._presenter = presenter;
  }

  processAllCardsInformation(): void {
    this._supabaseService.getAll()
      .then((data: InformationCard[]) => {
        this._presenter.processResponseCards(data);
      })
      .catch(() => this._presenter.errorMessages(this.errorMsn.errorGetAll));
  }

  processUpdateCardInformation(id: string, item: InformationCard): void {
    throw new Error("Method not implemented.");
  }

  processDeleteCardInformation(id: string): void {
    throw new Error("Method not implemented.");
  }

  processCreateCardInformation(form: FormGroup): void {
    this._supabaseService.create(form.value)
      .then(() => {
        this.processAllCardsInformation();
      })
      .catch(() => this._presenter.errorMessages(this.errorMsn.errorCreate));
  }

  processByIdCardInformation(id: string): void {
    throw new Error("Method not implemented.");
  }
}
