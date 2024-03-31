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
    this._presenter.saveCard(form);
    this.modalRef!.hide();
  }

  initFormUpdate(id: string, formUpdate: TemplateRef<void>) {
    this.idCard = id;
    this.openModalUpdate(formUpdate);
    this._presenter.getByIdCard(id);
    this.formInitUpdate();
  }

  openModalUpdate(formUpdate: TemplateRef<void>) {
    this.modalRef = this._modalService.show(formUpdate);
  }

  formInitUpdate() {
    this.form = this._formBuilder.group(formCreateInformationCard);
    this.form.patchValue({
      name: this.cardInformation?.name,
      autor: this.cardInformation?.autor,
      launch: this.cardInformation?.launch,
      gender: this.cardInformation?.gender,
      img: this.cardInformation?.img
    })
  }

  updateCard(form: FormGroup) {
    this._presenter.updateCard(this.idCard, form);
    this.modalRef!.hide();
  }

  detailCard(id: string, card: TemplateRef<void>) {
    this.openModalDetail(card);
    this._presenter.getByIdCard(id)
  }

  openModalDetail(card: TemplateRef<void>) {
    this.modalRef = this._modalService.show(card);
  }

  deleteCard(card: TemplateRef<void>) {

  }

  onConfirmDelete(id: string) {

  }
}
