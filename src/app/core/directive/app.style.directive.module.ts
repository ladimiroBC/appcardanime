import { NgModule } from "@angular/core";
import { AppStyleButtonDirective } from "./button/app.style.button.directive";
import { AppStyleIconDirective } from "./icon/app.style.icon.directive";

@NgModule({
  declarations: [
    AppStyleButtonDirective,
    AppStyleIconDirective
  ],
  exports: [
    AppStyleButtonDirective,
    AppStyleIconDirective
  ]
})
export class AppStyleDirectiveModule { }
