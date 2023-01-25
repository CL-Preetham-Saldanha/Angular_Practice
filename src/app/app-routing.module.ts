import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/departmentDetails' , pathMatch:"full"},
  {path:"departmentDetails", component:DepartmentDetailsComponent},
  {path:"departmentDetails/:id", component:DepartmentComponent},
  {path:"employeeDetails", component:EmployeeDetailsComponent},
  {path:"**", component:PageNotFoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[DepartmentDetailsComponent,EmployeeDetailsComponent, PageNotFoundComponent, DepartmentComponent]