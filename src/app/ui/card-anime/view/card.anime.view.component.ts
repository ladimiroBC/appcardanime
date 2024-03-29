import { Component, Inject, OnInit, SimpleChanges, TemplateRef } from "@angular/core";
import { CardAnimeOutputLogic } from "./model/card.anime.model";
import { IApplicationAnimeCard } from "../../../core/constants/app.card";
import { CardAnimePresenter } from "../presenter/card.anime.presenter";
import { FormBuilder, FormGroup } from "@angular/forms";
import { formInformationCard } from "./form/formInformationCard";
import { BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-card-anime',
  templateUrl: './card.anime.view.component.html',
  styleUrls: ['./card.anime.view.component.scss'],
  providers:  [
    BsModalService
  ]
})
export class CardAnimeViewComponent extends CardAnimeOutputLogic implements  OnInit{

  constructor(
    @Inject(IApplicationAnimeCard.CardAnimeInputLogic)
    private _presenter: CardAnimePresenter,
    private _formBuilder: FormBuilder,
    private _modalService: BsModalService)
  {
    super();
    this._presenter.setView(this);
  }

  ngOnInit(): void {
    this._presenter.getAllCards();
  }

  initFormCreate(createCard: TemplateRef<void>) {
    this.modalCreate(createCard);
    this.formCreate();
  }

  modalCreate(createCard: TemplateRef<void>) {
    this.modalRef = this._modalService.show(createCard);
  }

  formCreate() {
    this.actions.actionCreate = true;
    this.form = this._formBuilder.group(formInformationCard);
  }

  formCreateCard(form: FormGroup) {
    this._presenter.saveCard(form);
    this.modalRef?.hide();
  }

  initFormUpdate(id: string, updateCard: TemplateRef<void>) {
    this.modalUpdate(updateCard);
    this.idCard = id;
    this._presenter.getCard(id);
    this.formUpdate();
  }

  modalUpdate(updateCard: TemplateRef<void>) {
    this.modalRef = this._modalService.show(updateCard);
  }

  formUpdate() {
    this.actions.actionUpdate = true;
    this.form = this._formBuilder.group(formInformationCard);
    this.form?.patchValue({
      name: this.cardInformation.name,
      autor: this.cardInformation.autor,
      launch: this.cardInformation.launch,
      gender: this.cardInformation.gender,
      img: this.cardInformation.img
    })
  }

  formUpdateCard(form: FormGroup) {
    this._presenter.updateCard(this.idCard, form);
    this.modalRef?.hide();
  }

  cardModalDetail(detailCard: TemplateRef<void>, id: string) {
    this.modalRef = this._modalService.show(detailCard);
    this._presenter.getCard(id);
  }

  deleteModalCard(deleteCard: TemplateRef<void>) {
    this.modalRef = this._modalService.show(deleteCard);
  }

  onConfirmDelete(id: string) {
    this._presenter.deleteCard(id);
  }

  handleErrorMessages() {
    alert(`Error --> ${this.messagesErrors}`);
  }
}
