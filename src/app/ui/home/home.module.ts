import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./view/home.component";
import { RouterModule } from "@angular/router";
import { homeRounting } from "./home.routing.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRounting)
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
