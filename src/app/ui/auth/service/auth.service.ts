import { Injectable } from "@angular/core";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { environment } from "../../../../environments/environment";

@Injectable({providedIn: 'root'})
export class AuthService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.authsupabase.url, environment.authsupabase.apiKey);
  }

  signUp(email: string, password: string) {
    return this.supabase.auth.signUp({email, password});
  }

  signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({email, password});
  }
}
