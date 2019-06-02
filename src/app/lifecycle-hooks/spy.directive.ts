import { Directive, OnInit, OnDestroy } from '@angular/core';

import { LoggerService } from './logger.service';

let nextIdSpy = 1;

// Spy on any element to which it is applied.
// Usage: <div mySpy>...</div>
// tslint:disable-next-line:directive-selector
@Directive({ selector: '[mySpy]' })
export class SpyDirective implements OnInit, OnDestroy {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logIt(`onInit`);
  }

  ngOnDestroy() {
    this.logIt(`onDestroy`);
  }

  private logIt(msg: string) {
    this.logger.log(`Spy #${nextIdSpy++} ${msg}`);
  }
}
