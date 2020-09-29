import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pipes } from './pipes';
import { Services } from './services';
import { Components } from './components';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...Components,
    ...Pipes,
  ],
  providers: [
    ...Services,
  ],
  exports: [
    CommonModule,
    ...Components,
    ...Pipes,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
