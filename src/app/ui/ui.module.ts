import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { uiRounting } from "./ui.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(uiRounting)
  ]
})
export class UiModule { }
