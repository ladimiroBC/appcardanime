import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";
import { AppStyleButton } from "../../constants/app.styles";

@Directive({
  selector:'[appStyleButton]',
  host: {
    class: 'appStyleButton'
  }
})
export class AppStyleButtonDirective implements OnInit {
  @Input() styleButton!:AppStyleButton;

  constructor(private _element: ElementRef, private _renderer: Renderer2){ }

  ngOnInit(): void {
    this._renderer.addClass(this._element.nativeElement, this.styleButton);
  }
}
