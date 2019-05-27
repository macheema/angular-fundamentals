import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentsExampleComponent } from './components-example.component';
import { FormsModule } from '@angular/forms';
import { SquarePipe } from './sqr.pipe';
import { FontSizeDirective } from './font-size.directive';



@NgModule({
  declarations: [
    ComponentsExampleComponent,
    SquarePipe,
    FontSizeDirective
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
