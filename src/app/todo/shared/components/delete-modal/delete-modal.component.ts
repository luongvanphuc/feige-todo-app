import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalService } from '@shared/services';
import { Todo, TodoService } from '../../services/todo';

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
    private todoService: TodoService,
  ) { }

  submit() {
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
