import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Component, Input } from '@angular/core';
import { LoggerService } from './logger.service';

let nextId = 1;

export class PeekABoo implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private logger: LoggerService) { }


  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'peek-a-boo',
  template: '<p>Now you see my hero, {{name}}</p>',
  styles: ['p {background: LightYellow; padding: 8px}']
})
// Don't HAVE to mention the Lifecycle Hook interfaces
// unless we want typing and tool support.
export class PeekABooComponent extends PeekABoo implements
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
  @Input() name: string;

  private verb = 'initialized';

  constructor(logger: LoggerService) {
    super(logger);

    const is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }

  // implement OnInit's `ngOnInit` method
  ngOnInit() { this.logIt(`OnInit name ${this.verb} to "${this.name}"`); }
  // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes: SimpleChanges) {
    const changesMsgs: string[] = [];
    for (const propName in changes) {
      if (propName === 'name') {
        const name = changes['name'].currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`);
        changesMsgs.push(`name ${this.verb} to "${this.name}"`);
      } else {
        changesMsgs.push(propName + ' ' + this.verb);
      }
    }
    this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() { this.logIt(`DoCheck name ${this.verb} to "${this.name}"`); }

  ngAfterContentInit() { this.logIt(`AfterContentInit name ${this.verb} to "${this.name}"`); }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() { this.logIt(`AfterContentChecked name ${this.verb} to "${this.name}"`); }

  ngAfterViewInit() { this.logIt(`AfterViewInit name ${this.verb} to "${this.name}"`); }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() {
    this.logIt(`AfterViewChecked name ${this.verb} to "${this.name}"`);
    this.verb = 'changed'; // next time it will be a change
  }

  ngOnDestroy() { this.logIt(`OnDestroy`); }
}
