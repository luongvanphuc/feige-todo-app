import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '@shared/shared.module';
import { TodoComponent } from './todo.component';
import { TodayWidgetComponent } from './today-widget/today-widget.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './shared/services/todo/todo.service';
import { AddEditModalComponent } from './shared/components/add-edit-modal/add-edit-modal.component';
import { DeleteModalComponent } from './shared/components/delete-modal';
import { todoListReducer } from './shared/store/todo-list.reducer';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forRoot({ todoList: todoListReducer }),
  ],
  declarations: [
    TodoComponent,
    TodayWidgetComponent,
    TodoItemComponent,
    AddEditModalComponent,
    DeleteModalComponent,
  ],
  providers: [
    TodoService,
  ],
})
export class TodoModule { }
