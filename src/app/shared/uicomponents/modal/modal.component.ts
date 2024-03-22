import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input() title!: string;
  @Input() idModal!: string;
}
