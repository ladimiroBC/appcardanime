import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-card',
  template: `
  <div class="card">
    <img [src]="linkImg" class="card-img-top" [alt]="altName">
    <div class="card-body text-center">
      <h5 class="card-title">{{name}}</h5>
    </div>
 </div>
`
})
export class CardComponent {
  @Input() linkImg!: string;
  @Input() altName!: string;
  @Input() name!: string;
}
