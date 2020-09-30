import { Component, OnInit } from '@angular/core';
import { ModalService } from '@shared/services';
import { AddEditModalComponent } from './shared/components/add-edit-modal';
import { Todo, TodoService } from './shared/services/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: Array<Todo>;
  isLoadingData = false;

  constructor(
    private todoService: TodoService,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.isLoadingData = true;
    this.todoService.getAll().subscribe((data) => {
      this.todos = data || [];
      this.todos.reverse();
      this.isLoadingData = false;
    });
  }

  openAddModal() {
    this.modalService.open(AddEditModalComponent).result.then((addedTodo) => {
      if (addedTodo) {
        this.todos?.unshift(addedTodo);
      }
    });
  }

  removeItem(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
