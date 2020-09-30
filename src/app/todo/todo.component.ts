import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { ModalService } from '@shared/services';
import { AddEditModalComponent } from './shared/components/add-edit-modal';
import { Todo, TodoService } from './shared/services/todo';
import * as TodoListActions from './shared/store/todo-list.actions';
import { TodoListState } from './shared/store/todo-list.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnDestroy {
  todos: Array<Todo>;
  isLoadingData = false;

  private todoListSub: Subscription;

  constructor(
    private todoService: TodoService,
    private modalService: ModalService,
    private store: Store<{ todoList: TodoListState }>,
  ) { }

  ngOnInit(): void {
    this.isLoadingData = true;
    this.todoService.getAll().subscribe((data = []) => {
      this.isLoadingData = false;
      this.store.dispatch(new TodoListActions.GetAllTodos(data));
    });

    this.todoListSub = this.store.select('todoList').subscribe(({ todos }) => {
      this.todos = todos;
    });
  }

  ngOnDestroy(): void {
    this.todoListSub?.unsubscribe();
  }

  openAddModal() {
    this.modalService.open(AddEditModalComponent);
  }

  removeItem(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
