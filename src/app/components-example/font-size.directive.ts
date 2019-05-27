import { Directive, ElementRef, Input, Renderer2, OnChanges, AfterViewInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[fontsize]'
})
export class FontSizeDirective implements AfterViewInit {

  @Input() fontsize: number;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }
  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', `${this.fontsize}px`);
  }
}
