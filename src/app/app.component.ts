// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-root',
// //   templateUrl: './app.component.html',
// //   styleUrls: ['./app.component.css']
// // })
// // export class AppComponent {
// // }
// import { Component, ContentChild, Directive, Input, ViewChildren, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';
// // tslint:disable-next-line:directive-selector
// @Directive({ selector: 'pane' })
// // tslint:disable-next-line:directive-class-suffix
// export class Pane {
//   // TODO(issue/24571): remove '!'.
//   @Input() id !: string;
// }

// @Component({
//   // tslint:disable-next-line:component-selector
//   selector: 'tab',
//   template: `
//   <ng-content select=".a"></ng-content>
//   <ng-content select=".b"></ng-content>
//   `
// })
// // tslint:disable-next-line:component-class-suffix
// export class Tab implements AfterContentInit, AfterViewInit {

//   // TODO(issue/24571): remove '!'.

//   ngAfterContentInit(): void {
//   }
//   ngAfterViewInit(): void {
//   }
// }

// @Component({
//   selector: 'app-root',
//   template: `
//     <tab>
//       <div class="a">Awais</div>
//       <div class="b">Cheema</div>
//     </tab>

//     <button (click)="toggle()">Toggle</button>
//   `,
// })
// export class AppComponent {
//   shouldShow = true;

//   toggle() { this.shouldShow = !this.shouldShow; }
// }
import { Component, ContentChild, Directive, Input, ViewChildren, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';
// tslint:disable-next-line:directive-selector
@Directive({ selector: 'pane' })
// tslint:disable-next-line:directive-class-suffix
export class Pane {
  // TODO(issue/24571): remove '!'.
  @Input() id !: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tab',
  template: `
  <ng-content select=".a"></ng-content>
  <ng-content select=".b"></ng-content>
  `
})
// tslint:disable-next-line:component-class-suffix
export class Tab implements AfterContentInit, AfterViewInit {

  // TODO(issue/24571): remove '!'.

  ngAfterContentInit(): void {
  }
  ngAfterViewInit(): void {
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
