import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-icon',
  template:`<i [class]="classIcon">
    <ng-content></ng-content>
  </i>`
})
export class IconComponent {
  @Input() classIcon!: string;
}
