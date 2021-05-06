import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.html',
  styleUrls: ['./add-edit-emp.css']
})
export class AddEditEmp implements OnInit {

  @Input() emp: any;
  EmployeeId: string;
  EmployeeName: string;
  Department: string;
  DateOfJoining: string;
  PhotoFileName: string;
  PhotoFilePath: string;
  DepartmentsList: any = [];

  FileToUpload: File = null;

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.loadDepartmentList()
  }

  private loadDepartmentList(): void {
    this.service.getAllDepartmentNames().subscribe((data: any) => {
      this.DepartmentsList = data;
      this.EmployeeId = this.emp.EmployeeId;
      this.EmployeeName = this.emp.EmployeeName;
      this.Department = this.emp.Department;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.PhotoFileName = this.emp.PhotoFileName;
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    });
  }

  addEmployee(): void {
    let object = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.FileToUpload.name,
      PhotoFilePath: this.PhotoFilePath
    };
    this.service.addEmployee(object).subscribe(res => alert(res.toString()));
  }

  updateEmployee(): void {
    let object = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
      PhotoFilePath: this.PhotoFilePath
    };
    this.service.updateEmployee(object).subscribe(res => alert(res.toString()));
    console.log(this.PhotoFileName, this.PhotoFilePath);
  }

  onFileSelected(event) {
    this.FileToUpload = event.target.files[0];

    // Show image preview.
    const reader = new FileReader();
    reader.onload = (event: any) => this.PhotoFilePath = event.target.result;
    reader.readAsDataURL(this.FileToUpload);

    console.log(this.PhotoFileName, this.PhotoFilePath, this.FileToUpload);
  }

  uploadPhoto() {
    const formData: FormData = new FormData();
    formData.append('File', this.FileToUpload, this.FileToUpload.name);

    this.service.uploadPhoto(formData).subscribe((data: any) => {
      try {
        this.PhotoFileName = data.toString();
        this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
        console.warn('Photo saved on the server!')
      } catch (e) {
        e.console.error('Photo were not saved on the server!')
      }
    });
  }

  updatePhoto(id) {
    const formData = new FormData();
    formData.append('File', this.FileToUpload, this.FileToUpload.name);

    this.service.updatePhoto(id, formData).subscribe((data: any) => {
      try {
        this.PhotoFileName = data.toString();
        this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
        console.warn('Photo saved on the server!')
      } catch (e) {
        e.console.error('Photo were not saved on the server!')
      }
    });
  }
}
