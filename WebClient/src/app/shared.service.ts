import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getEmpList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Employee');
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Employee/GetAllDepartmentNames');
  }

  addEmployee(val: any): Observable<any> {
    return this.http.post(this.APIUrl + '/Employee/', val);
  }

  updateEmployee(val: any): Observable<any> {
    return this.http.put(this.APIUrl + '/Employee', val);
  }

  deleteEmployee(id: any): Observable<any> {
    return this.http.delete(this.APIUrl + '/Employee/' + id);
  }

  uploadPhoto(formData: any): Observable<any> {
    return this.http.post(this.APIUrl + '/Employee/UploadPhoto/', formData);
  }

  updatePhoto(id, formData): Observable<any> {
    return this.http.post(this.APIUrl + '/Employee/' + id + '/UpdatePhoto', formData);
  }
}
