import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AModule } from './A/a.module';
import { BModule } from './B/b.module';
import { ComponentsExampleModule } from './components-example/components-example.module';
import { RoutingExampleModule } from './routing-example/routing-example.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AModule,
    BModule,
    ComponentsExampleModule,
    RoutingExampleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
