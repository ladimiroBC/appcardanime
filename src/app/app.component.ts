import { Component } from '@angular/core';
import { OptionsMenubar } from './core/constants/app.text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  optionsNavbar = OptionsMenubar;
}
