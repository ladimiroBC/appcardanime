import { Observable } from "rxjs";

export interface CrudHttpClient<T> {
  getAll(): Observable<T[]>;
  getById(id: string): Observable<T>;
  create(item: T): Observable<T>;
  update(id: string, item: T): Observable<T>;
  delete(id: string): Observable<boolean>;
}
