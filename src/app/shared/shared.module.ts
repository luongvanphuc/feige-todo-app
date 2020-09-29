import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pipes } from './pipes';
import { Services } from './services';
import { Components } from './components';
import { Directives } from './directives';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ...Components,
    ...Pipes,
    ...Directives,
  ],
  providers: [
    ...Services,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ...Components,
    ...Pipes,
    ...Directives,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
