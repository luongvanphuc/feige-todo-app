import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { API_ENDPOINT } from '@app-constant';

@Injectable()
export class TodoService {
  private resourceUrl = API_ENDPOINT + '/todos';

  constructor(private http: HttpClient) { }

  get(id: number): Observable<Todo> {
    return this.http.get(`${this.resourceUrl}/${id}`);
  }

  getAll(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(this.resourceUrl);
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post(this.resourceUrl, todo);
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put(`${this.resourceUrl}/${todo.id}`, todo);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.resourceUrl}/${id}`);
  }
}
