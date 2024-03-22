import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-button',
  template: `
  <button
  class="btn btn-primary"
  type="button"
  [attr.data-bs-toggle]="dataBsToggle"
  [attr.data-bs-target]="dataBsTarget">
    <ng-content></ng-content>
  </button>
  `
})
export class ButtonComponent {
  @Input() dataBsTarget = '';
  @Input() dataBsToggle = '';
}
