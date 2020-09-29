import { Directive, Input, OnChanges, Renderer2, ElementRef, SimpleChanges, HostBinding } from '@angular/core';

@Directive({
  selector: 'button[appButton]',
})
export class ButtonDirective implements OnChanges {
  @Input('appButton') isLoading: boolean;
  @Input() autoRelease = true;
  @Input() submittedText = 'Submitted'; // only if autoRelease = false

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
  }

  @HostBinding('class.btn-loading') get loading() { return this.isLoading; }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isLoading && changes.isLoading.firstChange) {
      return;
    }

    this.setStatus();
  }

  private setStatus() {
    this.isLoading
      ? this.disableButton()
      : this.autoRelease
        ? this.releaseButton()
        : this.finishLoading();
  }

  private disableButton() {
    const el = this.elementRef?.nativeElement;
    if (el) {
      // disable the button to prevent multiple click
      this.renderer.setAttribute(el, 'disabled', 'disabled');

      // trick to hide the button text but keep the button width
      this.renderer.setStyle(el, 'color', 'transparent');
    }
  }

  private releaseButton() {
    const el = this.elementRef?.nativeElement;
    if (el) {
      this.renderer.removeAttribute(el, 'disabled');
      this.renderer.removeStyle(el, 'color');
    }
  }

  private finishLoading() {
    const el = this.elementRef?.nativeElement;
    if (el) {
      this.renderer.removeStyle(el, 'color');
      this.renderer.setProperty(el, 'innerHTML', this.submittedText);
    }
  }
}
