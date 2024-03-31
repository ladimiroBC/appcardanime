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
      'apiKey': this.env.headersApiSupabase.apikey,
      'Authorization': this.env.headersApiSupabase.auth
    });
  }

  private getHeadersAuth(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'apiKey': this.env.headersUserAuth.apikey,
      'Authorization': this.env.headersUserAuth.auth
    });
  }

  getAll(): Observable<InformationCard[]> {
    const headers = this.getHeaders();
    const cards = this._http.get<InformationCard[]>(this.env.endpoint.getAll, { headers });
    return cards;
  }

  getById(id: string): Observable<InformationCard> {
    const headers = this.getHeaders();
    return this._http.get<InformationCard>(this.env.endpoint.getById(id), { headers });
  }

  create(item: InformationCard): Observable<InformationCard> {
    const headers = this.getHeadersAuth();
    return this._http.post<InformationCard>(this.env.endpoint.create, item, { headers });
  }

  update(id: string, item: InformationCard): Observable<InformationCard> {
    const headers = this.getHeadersAuth();
    return this._http.patch<InformationCard>(this.env.endpoint.update(id), item, { headers });
  }

  delete(id: string): Observable<boolean> {
    const headers = this.getHeaders();
    return this._http.delete<boolean>(this.env.endpoint.delete(id), { headers });
  }
}
