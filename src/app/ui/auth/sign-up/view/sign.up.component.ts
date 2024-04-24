import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthForm } from "./form/auth.form";
import { TextFormAuth } from "../../../../core/constants/app.text";
import { AuthService } from "../../service/auth.service";

@Component({
  selector: 'sign-up-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./sign.up.component.scss']
})
export class SignUpComponent implements OnInit{
  textForm = TextFormAuth;
  authForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    console.log(`User create`, this.authForm.value);
    this._authService.signUp(this.authForm.value.email, this.authForm.value.password)
      .then((response: any) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  initForm(): void {
    this.authForm = this._formBuilder.group(AuthForm);
  }
}
