import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SignUpComponent } from "./view/sign.up.component";
import { RouterModule } from "@angular/router";
import { signUpRounting } from "./sign.up.routing";
import { UiComponentsModule } from "../../../shared/ui.components.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild(signUpRounting)
  ],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule { }
