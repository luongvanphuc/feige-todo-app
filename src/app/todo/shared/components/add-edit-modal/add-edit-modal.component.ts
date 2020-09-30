import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ModalService } from '@shared/services';
import { Todo, TodoService } from '../../services/todo';
import { validateFormControls } from '@shared/helpers/forms';
import { getYYYYMMDD } from '@shared/helpers/datetime';
import * as TodoListActions from '../../store/todo-list.actions';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.scss'],
})
export class AddEditModalComponent implements OnInit {

  model: Todo = {
    title: '',
    dueDate: null,
    complete: false,
  };

  minDueDate: string;
  editMode = false;
  submiting = false;

  constructor(
    private modalService: ModalService,
    private todoService: TodoService,
    private store: Store<{ todoList: { todos: Array<Todo> } }>,
  ) { }

  ngOnInit(): void {
    // detect edit mode
    this.editMode = typeof this.model.id === 'number';

    const today = new Date();
    this.minDueDate = getYYYYMMDD(today);

    // only auto-set dueday when add new
    if (!this.editMode) {
      this.model.dueDate = this.minDueDate;
    }
  }

  submit(form: NgForm) {
    // validate the for if the required fields are missing
    if (form.invalid) {
      validateFormControls(form);
      return;
    }

    this.submiting = true;

    const method = (this.editMode
      ? this.todoService.update
      : this.todoService.create).bind(this.todoService);

    method(this.model).subscribe((todo: Todo) => {
      this.store.dispatch(this.editMode
        ? new TodoListActions.UpdateTodo(todo)
        : new TodoListActions.CreateTodo(todo));
      this.modalService.close();
    });
  }

  closeModal() {
    this.modalService.dismiss();
  }
}
