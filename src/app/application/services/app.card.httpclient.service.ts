import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformationCard } from '../../domain/entity/information.card';
import { environment } from '../../../environments/environment';
import { ApplicationAnimeCardHttpClient } from '../../domain/interface/app.anime.card.http';

@Injectable()
export class ApplicationCardHttpService implements ApplicationAnimeCardHttpClient {
  private env = environment;

  constructor(private _http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'api-url': this.env.supabase.url,
      'public-key': this.env.supabase.publicKey
    });
  }

  getAll(): Observable<InformationCard[]> {
    const headers = this.getHeaders();
    return this._http.get<InformationCard[]>(this.env.endPoints.getAll, { headers });
  }

  getById(id: string): Observable<InformationCard> {
    const headers = this.getHeaders();
    return this._http.get<InformationCard>(this.env.endPoints.getById(id), { headers });
  }

  create(item: InformationCard): Observable<InformationCard> {
    const headers = this.getHeaders();
    return this._http.post<InformationCard>(this.env.endPoints.create, item, { headers });
  }

  update(item: InformationCard, id: string): Observable<InformationCard> {
    const headers = this.getHeaders();
    return this._http.put<InformationCard>(this.env.endPoints.update(id), item, { headers });
  }

  delete(id: string): Observable<boolean> {
    const headers = this.getHeaders();
    return this._http.delete<boolean>(this.env.endPoints.delete(id), { headers });
  }
}
