import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { TodoComponent } from './todo.component';
import { TodayWidgetComponent } from './today-widget/today-widget.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './shared/services/todo/todo.service';
import { AddModalComponent } from './shared/components/add-modal/add-modal.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    TodoComponent,
    TodayWidgetComponent,
    TodoItemComponent,
    AddModalComponent,
  ],
  providers: [
    TodoService,
  ]
})
export class TodoModule { }
