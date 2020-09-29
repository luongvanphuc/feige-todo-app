import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from './shared/services/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Array<Todo>;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getAll().subscribe((data) => {
      this.todos = data;
    });
  }
}
