import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from '@shared/services';
import { DeleteModalComponent } from '../shared/components/delete-modal';
import { Todo, TodoService } from '../shared/services/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {

  @Input() data: Todo;
  @Output() deleted = new EventEmitter<void>();

  constructor(
    private modalService: ModalService,
    private todoService: TodoService,
  ) { }

  updateComplete() {
    this.todoService.update(this.data).subscribe();
  }

  openDeleteModal() {
    this.modalService.open(DeleteModalComponent, null, { id: this.data.id }).result.then(() => {
      this.deleted.emit();
    });
  }

}
