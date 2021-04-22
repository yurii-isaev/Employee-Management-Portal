import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Employee } from './employee/employee';
import { ShowEmp } from './employee/show-emp/show-emp';
import { AddEditEmp } from './employee/add-edit-emp/add-edit-emp';
import { Department } from './department/department';
import { ShowDep } from './department/show-dep/show-dep';
import { AddEditDep } from './department/add-edit-dep/add-edit-dep';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    Employee,
    ShowEmp,
    AddEditEmp,
    Department,
    ShowDep,
    AddEditDep
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {}
