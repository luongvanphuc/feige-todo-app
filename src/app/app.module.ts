import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TodoModule } from './todo/todo.module';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    TodoModule,
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
