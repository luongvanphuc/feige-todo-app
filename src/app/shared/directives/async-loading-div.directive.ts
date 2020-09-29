import { Directive, Input, OnChanges, SimpleChanges, HostBinding } from '@angular/core';

@Directive({
  selector: 'div[appAsyncLoadingDiv]',
})
export class AsyncLoadingDivDirective implements OnChanges {
  @Input('appAsyncLoadingDiv') isLoading: boolean;

  @HostBinding('class.async-loading-div') get loading() { return this.isLoading; }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isLoading?.firstChange) {
      return;
    }
  }
}
