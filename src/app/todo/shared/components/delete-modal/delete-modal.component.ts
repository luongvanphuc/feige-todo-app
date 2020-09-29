import { Component } from '@angular/core';
import { StorageKey } from '@shared/constants/common.constant';

import { LocalStorage, ModalService } from '@shared/services';
import { TodoService } from '../../services/todo';

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
  ) {
  }

  submit() {
    if (this.stopAsking) {
      this.localStorage.setItem(StorageKey.NO_DELETE_CONFIRM, true);
    }

    this.isDeleting = true;
    this.todoService.delete(this.id).subscribe(() => {
      this.isDeleting = false;
      this.modalService.close();
    });
  }

  closeModal() {
    this.modalService.dismiss();
  }
}
