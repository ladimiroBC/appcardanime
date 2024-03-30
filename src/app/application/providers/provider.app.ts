import { Provider } from "@angular/core";
import { IApplicationAnimeCard } from "../../core/constants/app.card";
import { ApplicationCardSupabaseService } from "../services/app.card.supabase.service";
import { ApplicationCardHttpService } from "../services/app.card.httpclient.service";
import { CardAnimeInteractor } from "../../ui/card-anime/interactor/card.anime.interactor";
import { CardAnimePresenter } from "../../ui/card-anime/presenter/card.anime.presenter";
import { ApplicationMessagesService } from "../../common/utils/app.messages.service";

export const ProviderApplicationSupabase: Provider = {
   provide: IApplicationAnimeCard.ApplicationAnimeCardSupabase,
   useClass: ApplicationCardSupabaseService
}

export const ProviderApplicationHttpClient: Provider = {
  provide: IApplicationAnimeCard.ApplicationAnimeCardHttpClient,
  useClass: ApplicationCardHttpService
}

export const ProviderCardAnimeInteractorLogic: Provider = {
  provide: IApplicationAnimeCard.CardAnimeInteractorLogic,
  useClass: CardAnimeInteractor
}

export const ProviderCardAnimeInputLogic: Provider = {
  provide: IApplicationAnimeCard.CardAnimeInputLogic,
  useClass: CardAnimePresenter
}

export const ProviderApplicationMessages: Provider = {
  provide: IApplicationAnimeCard.ApplicationMessages,
  useClass: ApplicationMessagesService
}
