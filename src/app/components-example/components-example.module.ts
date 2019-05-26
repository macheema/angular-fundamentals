import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentsExampleComponent } from './components-example.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComponentsExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: [
    ComponentsExampleComponent
  ]
})
export class ComponentsExampleModule { }
