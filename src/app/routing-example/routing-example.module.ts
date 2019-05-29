import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RouterExampleComponent } from "./routing-example.component";


@NgModule({
    imports: [RouterModule],
    declarations: [RouterExampleComponent],
    providers: [],
    exports: [RouterExampleComponent,RouterModule]
})
export class RoutingExampleModule {
} 