import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[ssNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor() { }
  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (e.which != 8 && e.which != 0 && e.which < 48 || e.which > 57) {
      e.preventDefault();
    }

  }

}

