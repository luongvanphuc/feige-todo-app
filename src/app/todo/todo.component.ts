import { Component, OnInit } from '@angular/core';
import { ModalService } from '@shared/services';
import { AddModalComponent } from './shared/components/add-modal';
import { Todo, TodoService } from './shared/services/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor(
    private todoService: TodoService,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.todoService.getAll().subscribe((data) => {
      this.todos = data;
    });
  }

  openAddModal() {
    this.modalService.open(AddModalComponent).result.then((addedTodo) => {
      if (addedTodo) {
        this.todos.push(addedTodo);
      }
    });
  }
}
