import { Routes } from "@angular/router";

export const uiRounting: Routes = [
  {
    path: '',
    children: [
      {
        path: '', loadChildren: () => import('../ui/card-anime/card.anime.module').then(m => m.CardAnimeModule)
      }
    ]
  }
]
