import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee/show-emp/show-emp';
import { IDepartment } from './department/show-dep/show-dep';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  readonly APIUrl = 'http://localhost:5000/api';
  readonly PhotoUrl = 'http://localhost:5000/Photos/';

  constructor(private http: HttpClient) {}

  getAllDepartmentsFromDB(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.APIUrl + '/Department');
  }

  addDepartmentToDB(object: IDepartment): Observable<string> {
    return this.http.post<string>(this.APIUrl + '/Department', object);
  }

  updateDepartmentToDB(object: IDepartment): Observable<string> {
    return this.http.put<string>(this.APIUrl + '/Department', object);
  }

  deleteDepartmentFromDB(id: number): Observable<string> {
    return this.http.delete<string>(this.APIUrl + '/Department/' + id);
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
