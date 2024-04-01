import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() home!: string;
  @Input() signIn!: string;
  @Input() signUp!: string;
  @Input() logout!: string;
}
