import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Employee } from './employee/employee';
import { ShowEmp } from './employee/show-emp/show-emp';
import { AddEditEmp } from './employee/add-edit-emp/add-edit-emp';

@NgModule({
  declarations: [
    AppComponent,
    Employee,
    ShowEmp,
    AddEditEmp
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
