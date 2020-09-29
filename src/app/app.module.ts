import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TodoModule } from './todo/todo.module';
import { TodoComponent } from './todo/todo.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    TodoModule,
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
