import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServicesModule } from './shared/services/services.module';
import { TodoComponent } from './todo.component';
import { TodayWidgetComponent } from './today-widget/today-widget.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
  ],
  declarations: [
    TodoComponent,
    TodayWidgetComponent,
    TodoItemComponent,
  ],
})
export class TodoModule { }
