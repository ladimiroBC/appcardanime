import { Routes } from "@angular/router";

export const uiRounting: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: '/home', pathMatch: 'full'
      },
      {
        path: '', loadChildren: () => import('./home/home.module')
          .then(m => m.HomeModule)
      },
      {
        path: '', loadChildren: () => import('./auth/sign-in/sign.in.module')
          .then(m => m.SignInModule)
      },
      {
        path: '', loadChildren: () => import('./auth/sign-up/sign.up.module')
          .then(m => m.SignUpModule)
      },
      {
        path: '**', redirectTo: '/home', pathMatch: 'full'
      }
    ]
  }
]
