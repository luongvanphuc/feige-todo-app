import { NgModule } from '@angular/core';

import { TodoService } from './todo/todo.service';

@NgModule({
  providers: [
    TodoService,
  ],
})
export class ServicesModule { }
