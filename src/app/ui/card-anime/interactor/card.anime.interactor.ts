import { Inject, Injectable } from "@angular/core";
import { IApplicationAnimeCard } from "../../../core/constants/app.card";
import { ApplicationCardSupabaseService } from "../../../application/services/app.card.supabase.service";
import { InformationCard } from "../../../domain/entity/information.card";
import { CardAnimeInputLogic, CardAnimeInteractorLogic } from "../view/model/card.anime.model";
import { MessagesError } from "../../../core/constants/app.text";

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

  async processAllCardsInformation(): Promise<void> {
    try {
      const cards = await this._supabaseService.getAll();
      this._presenter.responseCards(cards);
    } catch {
      this._presenter.responseErrorMessages(this.errorMsn.errorGetAll);
    }
  }

  async processCreateCardInformation(card: InformationCard): Promise<void> {
    try {
      await this._supabaseService.create(card);
      this.processAllCardsInformation();
    } catch {
      this._presenter.responseErrorMessages(this.errorMsn.errorCreate);
    }
  }

  async processByIdCardInformation(id: string): Promise<void> {
    try {
      const card = await this._supabaseService.getById(id);
      this._presenter.responseCard(card);
    } catch {
      this._presenter.responseErrorMessages(this.errorMsn.errorGetId);
    }
  }

  async processUpdateCardInformation(id: string, card: InformationCard): Promise<void> {
    try {
      await this._supabaseService.update(id, card);
      this.processAllCardsInformation();
    } catch {
      this._presenter.responseErrorMessages(this.errorMsn.errorUpdate);
    }
  }

  processDeleteCardInformation(id: string): void {
    this._supabaseService.delete(id);
  }
}
