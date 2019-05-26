import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AComponent } from './a.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';

@NgModule({
  declarations: [
    AComponent,
    A1Component,
    A2Component,
    A3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    AComponent,
    A1Component,
    A2Component,
    A3Component
  ],
  bootstrap: [AComponent]
})
export class AModule { }
