import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalService } from '@shared/services';
import { Todo, TodoService } from '../../services/todo';
import { validateFormControls } from '@shared/helpers/forms';

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
    private todoService: TodoService,
  ) { }

  submit(form: NgForm) {
    // validate the for if the required fields are missing
    if (form.invalid) {
      validateFormControls(form);
      return;
    }

    this.submiting = true;
    this.todoService.create(this.model).subscribe((addedTodo) => {
      this.modalService.close(addedTodo);
    });
  }

  closeModal() {
    this.modalService.close();
  }
}
