import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeeComponent} from './employee/list-employee.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { create } from 'domain';


const appRoutes: Routes =[
  { path: 'list', component: ListEmployeeComponent},
  {path: 'create', component: CreateEmployeeComponent},
  { path: '', redirectTo:'/list', pathMatch: 'full'}
]
@NgModule({

  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
