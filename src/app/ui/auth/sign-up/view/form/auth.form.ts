import { Validators } from "@angular/forms";
import { AuthValidator } from "./types/auth.validator";

export const AuthForm: AuthValidator = {
  email: ['', [Validators.required]],
  password: ['', [Validators.required ]],
}
