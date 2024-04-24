import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavbarComponent } from "./uicomponents/navbar/navbar.component";
import { RouterLink } from "@angular/router";

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    NavbarComponent,
  ]
})
export class UiComponentsModule { }
