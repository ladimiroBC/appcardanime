import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  @Input() actionCreateCard!: boolean;
  @Input() actionUpdateCard!: boolean;
  @Input() formCard!: FormGroup;
  @Output() formCreateCard = new EventEmitter<FormGroup>;
  @Output() formUpdateCard = new EventEmitter<FormGroup>;

  sendForm(): FormGroup {
    return this.formCard;
  }

  sendFormCardCreate() {
    this.formCreateCard.emit(this.formCard);
  }

  sendFormUpdateCreate() {
    this.formUpdateCard.emit(this.formCard);
  }
}
