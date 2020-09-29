import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoService } from '../shared/services/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {

  @Input() data: Todo;

  constructor(private todoService: TodoService) { }

  updateComplete() {
    this.todoService.update(this.data).subscribe();
  }

}
