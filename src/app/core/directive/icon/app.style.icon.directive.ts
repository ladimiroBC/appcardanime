import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";
import { AppStyleIcon } from "../../constants/app.styles";

@Directive({
  selector:'[appStyleIcon]',
  host: {
    class: 'appStyleIcon'
  }
})
export class AppStyleIconDirective implements OnInit {
  @Input() styleIcon!: AppStyleIcon;

  constructor(private _element: ElementRef, private _renderer: Renderer2){ }

  ngOnInit(): void {
    this._renderer.addClass(this._element.nativeElement, this.styleIcon);
  }
}
