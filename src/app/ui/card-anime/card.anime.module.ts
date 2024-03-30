import { NgModule } from "@angular/core";
import { CardAnimeViewComponent } from "./view/card.anime.view.component";
import { CommonModule } from "@angular/common";
import
{
  ProviderApplicationHttpClient,
  ProviderApplicationMessages,
  ProviderApplicationSupabase,
  ProviderCardAnimeInputLogic,
  ProviderCardAnimeInteractorLogic
} from "../../application/providers/provider.app";
import { UiComponentsModule } from "../../shared/uicomponent.module";
import { RouterModule } from "@angular/router";
import { cardAnimeRounting } from "./card.anime.routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppStyleDirectiveModule } from "../../core/directive/app.style.directive.module";

@NgModule({
  declarations: [
    CardAnimeViewComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    ReactiveFormsModule,
    AppStyleDirectiveModule,
    RouterModule.forChild(cardAnimeRounting)
  ],
  exports: [
    CardAnimeViewComponent
  ],
  providers: [
    ProviderApplicationSupabase,
    ProviderApplicationHttpClient,
    ProviderCardAnimeInputLogic,
    ProviderCardAnimeInteractorLogic,
    ProviderApplicationMessages
  ]
})
export class CardAnimeModule { }
