import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../shared/services/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() data: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
