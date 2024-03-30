import { Injectable } from "@angular/core";
import { ApplicationMessages } from "../../domain/interface/app.messages";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class ApplicationMessagesService implements ApplicationMessages{

  constructor(private _toastService: ToastrService) { }

  showMessagesSuccessfull(message: string, title: string): void {
    this._toastService.success(message, title);
  }
  showMessagesError(message: string, title: string): void {
    this._toastService.error(message, title);
  }
}
