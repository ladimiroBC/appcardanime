import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "./uicomponents/card/card.component";
import { ButtonComponent } from "./uicomponents/button/button.component";
import { FormComponent } from "./uicomponents/form/form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CardComponent,
    ButtonComponent,
    FormComponent
  ]
})
export class UiComponentsModule { }
