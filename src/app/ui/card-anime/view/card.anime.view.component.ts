import { Component, Inject, OnInit, TemplateRef } from "@angular/core";
import { CardAnimeOutputLogic } from "./model/card.anime.model";
import { IApplicationAnimeCard } from "../../../core/constants/app.card";
import { CardAnimePresenter } from "../presenter/card.anime.presenter";
import { BsModalService } from "ngx-bootstrap/modal";
import { FormBuilder, FormGroup } from "@angular/forms";
import { formCreateInformationCard } from "./form/validators";

@Component({
  selector: 'app-card-anime',
  templateUrl: './card.anime.view.component.html',
  styleUrls: ['./card.anime.view.component.scss'],
  providers: [
    BsModalService
  ]
})
export class CardAnimeViewComponent extends CardAnimeOutputLogic implements  OnInit{

  constructor(
    @Inject(IApplicationAnimeCard.CardAnimeInputLogic)
    private _presenter: CardAnimePresenter,
    private _modalService: BsModalService,
    private _formBuilder: FormBuilder)
  {
    super();
    this._presenter.setView(this);
  }

  ngOnInit(): void {
    this._presenter.getAllCards();
  }

  initFormCreate(formCreate: TemplateRef<void>) {
    this.openModalCreate(formCreate);
    this.formInitCreateCard();
  }

  openModalCreate(formCreate: TemplateRef<void>) {
    this.modalRef = this._modalService.show(formCreate);
  }

  formInitCreateCard() {
    this.form = this._formBuilder.group(formCreateInformationCard);
  }

  createCard(form: FormGroup) {
    this.modalRef!.hide();
    this._presenter.saveCard(form);
  }
}
