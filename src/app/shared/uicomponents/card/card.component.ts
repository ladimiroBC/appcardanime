import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-card',
  template: `
  <div class="col">
    <div class="card">
        <img [src]="linkImg" class="card-img-top" [alt]="altName">
      <div class="card-body text-center">
        <h5 class="card-title">{{name}}</h5>
      <div class="d-flex justify-content-center">
        <ng-content select="[buttons]"></ng-content>
      </div>
    </div>
  </div>
`,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() linkImg!: string;
  @Input() altName!: string;
  @Input() name!: string;
}
