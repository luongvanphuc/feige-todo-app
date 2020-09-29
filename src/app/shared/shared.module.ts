import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pipes } from './pipes';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...Pipes,
  ],
  exports: [
    CommonModule,
    ...Pipes,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
