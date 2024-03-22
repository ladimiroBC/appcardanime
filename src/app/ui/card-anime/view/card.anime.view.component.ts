import { Component, Inject, OnInit } from "@angular/core";
import { CardAnimeOutputLogic } from "./model/card.anime.model";
import { IApplicationAnimeCard } from "../../../core/constants/app.card";
import { CardAnimePresenter } from "../presenter/card.anime.presenter";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-card-anime',
  templateUrl: './card.anime.view.component.html',
  styleUrls: ['./card.anime.view.component.scss']
})
export class CardAnimeViewComponent extends CardAnimeOutputLogic implements OnInit{

  constructor(
    @Inject(IApplicationAnimeCard.CardAnimeInputLogic)
    private _presenter: CardAnimePresenter)
    {
      super();
      this._presenter.setView(this);
    }

  ngOnInit(): void {
    this._presenter.getAllCards();
    this.getFormInitCreate();
  }

  getFormInitCreate() {
    this._presenter.initFormCreate();
  }

  submitCreatedForm(form: FormGroup) {
    this._presenter.processCardCreate(form);
  }
}
