import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '@shared/services';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent {

  model: Todo = {
    title: '',
    content: '',
    dueDate: new Date(),
  };

  submiting = false;

  constructor(
    private modalService: ModalService,
    private httpClient: HttpClient,
  ) { }

  submit(form) {

  }

  closeModal() {
    this.modalService.close();
  }
}
