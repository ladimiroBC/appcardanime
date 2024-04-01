import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SignUpComponent } from "./view/sign.up.component";
import { RouterModule } from "@angular/router";
import { signUpRounting } from "./sign.up.routing.module";


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(signUpRounting)
  ],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule { }
