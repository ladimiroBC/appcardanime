import { Observable } from "rxjs";

export interface CrudHttpClient<T> {
  getAll(): Observable<T[]>;
  getById(id: string): Observable<T>;
  create(item: T): Observable<T>;
  update(item: T, id: string): Observable<T>;
  delete(id: string): Observable<boolean>;
}
