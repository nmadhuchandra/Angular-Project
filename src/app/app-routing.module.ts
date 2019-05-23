import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeeComponent} from './employee/list-employee.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { CompanyComponent } from './company/company.component';
import { DisplayComponent } from './display/display.component';

@NgModule({

  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot([
      { path:'company', component: CompanyComponent},
      { path: 'list', component: ListEmployeeComponent},
      {path: 'create', component: CreateEmployeeComponent},
      {path: 'display', component: DisplayComponent},
      {path: 'display/:postId', component: DisplayComponent},
      { path: '', redirectTo:'/company', pathMatch: 'full'}
    ])
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
