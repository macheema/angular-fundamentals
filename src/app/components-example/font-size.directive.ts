import { Directive, ElementRef, Input, Renderer2, OnChanges, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[fontsize]'
})
export class FontSizeDirective implements DoCheck {


  @Input() fontsize: number;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngDoCheck(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', `${this.fontsize}px`);
  }
}
