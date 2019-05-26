import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AModule } from './A/a.module';
import { BModule } from './B/b.module';
import { ComponentsExampleModule } from './components-example/components-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AModule,
    BModule,
    ComponentsExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
