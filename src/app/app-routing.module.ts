import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Scree1Component} from './scree1/scree1.component';
import {Screen2Component} from './screen2/screen2.component';
import {Screen3Component} from './screen3/screen3.component';
import {Screen4Component} from './screen4/screen4.component';
const routes: Routes = [
  {
    path: 'userFeedback',
    component: Screen4Component
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
