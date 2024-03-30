import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-button',
  template: `
  <button type="button" [attr.tooltip]="tooltip">
    <ng-content></ng-content>
  </button>
  `
})
export class ButtonComponent {
  @Input() tooltip!: string;
}
