import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Employee } from './employee/employee';
import { Department } from './department/department';

const routes: Routes = [
  {path: 'employee', component: Employee},
  {path: 'department', component: Department}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
