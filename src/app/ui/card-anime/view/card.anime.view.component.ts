import { Component, Inject, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { CardAnimeOutputLogic } from "./model/card.anime.model";
import { IApplicationAnimeCard } from "../../../core/constants/app.card";
import { CardAnimePresenter } from "../presenter/card.anime.presenter";
import { FormGroup } from "@angular/forms";
import { InformationCard } from "../../../domain/entity/information.card";

@Component({
  selector: 'app-card-anime',
  templateUrl: './card.anime.view.component.html',
  styleUrls: ['./card.anime.view.component.scss']
})
export class CardAnimeViewComponent extends CardAnimeOutputLogic implements  OnInit{

  constructor(
    @Inject(IApplicationAnimeCard.CardAnimeInputLogic)
    private _presenter: CardAnimePresenter)
  {
    super();
    this._presenter.setView(this);
  }

  ngOnInit(): void {
    this._presenter.getAllCards();
  }

  getActionCreate(): boolean {
    return true;
  }

  getActionUpdate(): boolean {
    return true;
  }

  getIdCard(id: string) {
    this._presenter.searchIdCard(id);
  }

  formInit(action: string, id: string) {
    if (action == this.actions.actionCreateForm) {
      this._presenter.initFormCreate();
    } else if (action == this.actions.actionUpdateForm && id.length) {
        this._presenter.initFormUpdate(id);
        localStorage.setItem('idCard', id);
    }
  }

  submitCreatedForm(form: FormGroup) {
    this._presenter.submitCardCreate(form);
    this.closeModalAndReload();
  }

  submitUpdateForm(form: FormGroup) {
    const id = localStorage.getItem('idCard')!;
    this._presenter.submitCardUpdate(form, id);
    this.closeModalAndReload();
  }

  closeModalAndReload(): void {
    const modal = document.getElementById(this.optionsModal.idModalCreate);
    modal!.style.display = 'none'
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
}
