import { Injectable } from "@angular/core";
import { InformationCard } from "../../domain/entity/information.card";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { Tables } from "../../core/constants/tables";
import { environment } from "../../../environments/environment";
import { ApplicationAnimeCardSupabase } from "../../domain/interface/app.anime.card.supabase";

@Injectable()
export class ApplicationCardSupabaseService implements ApplicationAnimeCardSupabase {
  private supabaseClient: SupabaseClient;
  private env = environment;
  private tables = Tables

  constructor() {
    this.supabaseClient = createClient(
      this.env.supabase.url,
      this.env.supabase.publicKey);
  }

  async getById(id: string): Promise<InformationCard | null> {
    const { data } = await this.supabaseClient
      .from(this.tables.INFORMATION_CARD_TABLE)
      .select('*')
      .eq('id', id)
      .single();

    return data as unknown as InformationCard;
  }

  async create(item: InformationCard): Promise<InformationCard> {
    const { data } = await this.supabaseClient
      .from(this.tables.INFORMATION_CARD_TABLE)
      .insert(item);

    return data as unknown as InformationCard;
  }

  async getAll(): Promise<InformationCard[]> {
    const { data } = await this.supabaseClient
      .from(this.tables.INFORMATION_CARD_TABLE)
      .select('*');

    return data as unknown as InformationCard[];
  }

  async update(id: string, item: InformationCard): Promise<InformationCard | null> {
    const { data } = await this.supabaseClient
      .from(this.tables.INFORMATION_CARD_TABLE)
      .update(item)
      .eq('id', id);

    return data as unknown as InformationCard;
  }

  async delete(id: string): Promise<void> {
      await this.supabaseClient
      .from(this.tables.INFORMATION_CARD_TABLE)
      .delete()
      .eq('id', id);
  }
}
