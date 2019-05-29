import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterExampleComponent } from './routing-example/routing-example.component';
import { AComponent } from './A/a.component';
import { BComponent } from './B/b.component';

const appRoutes: Routes = [
  { path: '', component: AComponent },
  { path: 'page1', component: AComponent },
  { path: 'page2', component: BComponent },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
