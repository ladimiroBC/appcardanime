import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SignInComponent } from "./view/sign.in.component";
import { RouterModule } from "@angular/router";
import { signInRounting } from "./sign.in.routing";
import { UiComponentsModule } from "../../../shared/ui.components.module";

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    RouterModule.forChild(signInRounting)
  ],
  exports: [
    SignInComponent
  ]
})
export class SignInModule { }
