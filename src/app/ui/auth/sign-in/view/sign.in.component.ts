import { Component, OnInit } from "@angular/core";
import { TextFormAuth } from "../../../../core/constants/app.text";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthForm } from "./form/auth.form";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign.in.component.html',
  styleUrls: ['./sign.in.component.scss']
})
export class SignInComponent implements OnInit{
  textForm = TextFormAuth;
  authForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.authForm = this._formBuilder.group(AuthForm);
  }
}
