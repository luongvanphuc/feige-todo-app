import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StorageKey } from '@shared/constants/common.constant';

import { LocalStorage, ModalService } from '@shared/services';
import { TodoService } from '../../services/todo';
import * as TodoListActions from '../../store/todo-list.actions';
import { TodoListState } from '../../store/todo-list.reducer';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent {

  id: number;
  stopAsking: boolean;
  isDeleting = false;

  constructor(
    private modalService: ModalService,
    private localStorage: LocalStorage,
    private todoService: TodoService,
    private store: Store<{ todoList: TodoListState }>,
  ) {
  }

  submit() {
    if (this.stopAsking) {
      this.localStorage.setItem(StorageKey.NO_DELETE_CONFIRM, true);
    }

    this.isDeleting = true;
    this.todoService.delete(this.id).subscribe(() => {
      this.isDeleting = false;
      this.store.dispatch(new TodoListActions.DeleteTodo(this.id));
      this.modalService.close();
    });
  }

  closeModal() {
    this.modalService.dismiss();
  }
}
