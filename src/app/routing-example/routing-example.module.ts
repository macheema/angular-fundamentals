import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterExampleComponent } from './routing-example.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        RouterModule
        , FormsModule],
    declarations: [RouterExampleComponent],
    providers: [],
    exports: [RouterExampleComponent, RouterModule]
})
export class RoutingExampleModule {
}
