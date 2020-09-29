import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalService } from '@shared/services';
import { Todo, TodoService } from '../../services/todo';
import { validateFormControls } from '@shared/helpers/forms';
import { getYYYYMMDD } from '@shared/helpers/datetime';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent implements OnInit {

  model: Todo = {
    title: '',
    content: '',
    dueDate: null,
  };

  minDueDate: string;
  submiting = false;

  constructor(
    private modalService: ModalService,
    private todoService: TodoService,
  ) { }

  ngOnInit(): void {
    const today = new Date();
    this.minDueDate = getYYYYMMDD(today);
    this.model.dueDate = this.minDueDate;
  }

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
    this.modalService.dismiss();
  }
}
