import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { IEmployee } from '../show-emp/show-emp';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.html',
  styleUrls: ['./add-edit-emp.css']
})
export class AddEditEmp implements OnInit {
  @Input() Employee: IEmployee;
  departmentList: Array<string>;
  employeeId: number;
  employeeName: string;
  department: string;
  dateOfJoining: string;
  photoFileName: string;
  photoFilePath: string;
  fileToUpload: File;
  formData: FormData;

  constructor(private service: SharedService) {
    this.fileToUpload = null;
    this.formData = new FormData();
  }

  ngOnInit(): void {
    this.loadDepartmentList()
    this.employeeId = this.Employee.EmployeeId;
    this.employeeName = this.Employee.EmployeeName;
    this.department = this.Employee.Department;
    this.dateOfJoining = this.Employee.DateOfJoining;
    this.photoFileName = this.Employee.PhotoFileName;
    this.photoFilePath = this.service.PhotoUrl + this.photoFileName;
  }

  private getEmployee(): IEmployee {
    return this.Employee = {
      EmployeeId: this.employeeId,
      EmployeeName: this.employeeName,
      Department: this.department,
      DateOfJoining: this.dateOfJoining,
      PhotoFileName: this.photoFileName
    };
  }

  loadDepartmentList(): void {
    this.service.getAllDepNamesFromDB().subscribe((data: any) =>
      this.departmentList = data
    );
  }

  addEmployee(): void {
    this.service.addEmployeeToDB(this.getEmployee()).subscribe(x => {
      console.warn(this.photoFileName, this.photoFilePath);
    });
  }

  updateEmployee(): void {
    this.service.updateEmployeeToDB(this.getEmployee()).subscribe(x => {
      console.warn(this.photoFileName, this.photoFilePath);
    });
  }

  onFileSelected(event) {
    this.fileToUpload = event.target.files[0];

    // Show image preview.
    const reader = new FileReader();
    reader.onload = (event: any) => this.photoFilePath = event.target.result;
    reader.readAsDataURL(this.fileToUpload);

    this.formData.append('File', this.fileToUpload, this.fileToUpload.name);

    console.log(this.photoFileName, this.photoFilePath, this.fileToUpload);
  }

  uploadFile() {
    this.service.uploadPhotoToStorage(this.formData).subscribe((data: any) => {
      try {
        this.photoFileName = data.toString();
        this.photoFilePath = this.service.PhotoUrl + this.photoFileName;
        console.warn('Photo saved on the server!')
      } catch (e) {
        e.console.error('Photo were not saved on the server!')
      }
    });
  }

  updateFile(id) {
    this.service.updatePhotoToStorage(id, this.formData).subscribe((data: any) => {
      try {
        this.photoFileName = data.toString();
        this.photoFilePath = this.service.PhotoUrl + this.photoFileName;
        console.warn('Photo saved on the server!')
      } catch (e) {
        e.console.error('Photo were not saved on the server!')
      }
    });
  }
}
