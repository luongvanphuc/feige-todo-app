import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StorageKey } from '@shared/constants/common.constant';

import { LocalStorage, ModalService } from '@shared/services';
import { AddEditModalComponent } from '../shared/components/add-edit-modal';
import { DeleteModalComponent } from '../shared/components/delete-modal';
import { Todo, TodoService } from '../shared/services/todo';
import * as TodoListActions from '../shared/store/todo-list.actions';
import { TodoListState } from '../shared/store/todo-list.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {

  @Input() data: Todo;

  model: Todo;

  // for mobile device
  toggledActionPanel = false;

  constructor(
    private modalService: ModalService,
    private localStorage: LocalStorage,
    private todoService: TodoService,
    private store: Store<{ todoList: TodoListState }>,
  ) { }

  ngOnInit(): void {
    // shallow copy the data
    this.model = { ...this.data };
  }

  updateComplete() {
    this.todoService.update(this.model).subscribe();
    this.store.dispatch(new TodoListActions.UpdateTodo(this.model));
  }

  openDeleteModal() {
    // if user had chosen to delete immediately
    const stopAsking = this.localStorage.getItem(StorageKey.NO_DELETE_CONFIRM);

    if (stopAsking) {
      // delete immediately
      this.todoService.delete(this.data.id).subscribe();
      this.store.dispatch(new TodoListActions.DeleteTodo(this.data.id));
    } else {
      // open a modal to confirm
      this.modalService.open(DeleteModalComponent, null, { id: this.data.id });
    }
  }

  openEditModal() {
    // shallow copy the model
    this.modalService.open(AddEditModalComponent, null, { model: { ...this.data } });
  }
}
