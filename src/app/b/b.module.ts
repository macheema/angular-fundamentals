import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BComponent } from './b.component';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { B3Component } from './b3/b3.component';

@NgModule({
  declarations: [
    BComponent,
    B1Component,
    B2Component,
    B3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    BComponent,
    B1Component,
    B2Component,
    B3Component
  ],
  bootstrap: [BComponent]
})
export class BModule { }
