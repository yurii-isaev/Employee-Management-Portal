import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee/show-emp/show-emp';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  readonly APIUrl = 'http://localhost:5000/api';
  readonly PhotoUrl = 'http://localhost:5000/Photos/';

  constructor(private http: HttpClient) {}

  getDepList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Department');
  }

  addDepartment(val: any): Observable<any> {
    return this.http.post(this.APIUrl + '/Department', val);
  }

  updateDepartment(val: any): Observable<any> {
    return this.http.put(this.APIUrl + '/Department', val);
  }

  deleteDepartment(val: any): Observable<any> {
    return this.http.delete(this.APIUrl + '/Department/' + val);
  }

  getAllEmployeesFromDB(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.APIUrl + '/Employee');
  }

  getAllDepNamesFromDB(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.APIUrl + '/Employee/GetAllDepartmentNames');
  }

  addEmployeeToDB(object: IEmployee): Observable<string> {
    return this.http.post<string>(this.APIUrl + '/Employee/', object);
  }

  updateEmployeeToDB(object: IEmployee): Observable<string> {
    return this.http.put<string>(this.APIUrl + '/Employee', object);
  }

  deleteEmployeeFromDB(id: number): Observable<string> {
    return this.http.delete<string>(this.APIUrl + '/Employee/' + id);
  }

  uploadPhotoToStorage(formData: FormData): Observable<string> {
    return this.http.post<string>(this.APIUrl + '/Employee/UploadPhoto/', formData);
  }

  updatePhotoToStorage(id: number, formData: FormData): Observable<string> {
    return this.http.post<string>(this.APIUrl + '/Employee/' + id + '/UpdatePhoto', formData);
  }
}
