import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{
  @Input() actionCreateCard!: boolean;
  @Input() formCard!: FormGroup;
  @Output() formCreateCard = new EventEmitter<FormGroup>;
  @Output() formUpdateCard = new EventEmitter<FormGroup>;

  ngOnInit(): void {
    console.log(this.formCard);
    console.log(this.actionCreateCard);
  }

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
