import { NgModule } from "@angular/core";
import { CardAnimeViewComponent } from "./view/card.anime.view.component";
import { CommonModule } from "@angular/common";
import { ProviderApplicationSupabase, ProviderCardAnimeInputLogic, ProviderCardAnimeInteractorLogic } from "../../application/providers/provider.app";
import { UiComponentsModule } from "../../shared/uicomponent.module";
import { RouterModule } from "@angular/router";
import { cardAnimeRounting } from "./card.anime.routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CardAnimeViewComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild(cardAnimeRounting)
  ],
  exports: [
    CardAnimeViewComponent
  ],
  providers: [
    ProviderApplicationSupabase,
    ProviderCardAnimeInputLogic,
    ProviderCardAnimeInteractorLogic
  ]
})
export class CardAnimeModule { }
