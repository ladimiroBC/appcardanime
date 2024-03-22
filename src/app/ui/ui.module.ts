import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { uiRounting } from "./ui.routing.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(uiRounting)
  ]
})
export class UiModule { }
