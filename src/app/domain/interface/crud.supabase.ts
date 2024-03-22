export interface CrudSupase<T> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>;
  create(item: T): Promise<T | null>;
  update(id: string ,item: T): Promise<T | null>;
  delete(id: string): Promise<void>;
}
