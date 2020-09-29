import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StorageKey } from '@shared/constants/common.constant';

import { LocalStorage, ModalService } from '@shared/services';
import { DeleteModalComponent } from '../shared/components/delete-modal';
import { Todo, TodoService } from '../shared/services/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {

  @Input() data: Todo;
  @Output() deleted = new EventEmitter<void>();

  constructor(
    private modalService: ModalService,
    private localStorage: LocalStorage,
    private todoService: TodoService,
  ) { }

  updateComplete() {
    this.todoService.update(this.data).subscribe();
  }

  openDeleteModal() {
    // if user had chosen to delete immediately
    const stopAsking = this.localStorage.getItem(StorageKey.NO_DELETE_CONFIRM);

    if (stopAsking) {
      // delete immediately
      this.todoService.delete(this.data.id).subscribe();
      this.deleted.emit();
    } else {
      // open a modal to confirm
      this.modalService.open(DeleteModalComponent, null, { id: this.data.id }).result.then(() => {
        this.deleted.emit();
      });
    }
  }

}
