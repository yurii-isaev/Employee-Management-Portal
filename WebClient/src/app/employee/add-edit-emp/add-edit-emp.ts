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
  DepartmentsList: any = [];

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
    });
  }

  addEmployee(): void {
    let object = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining
    };
    this.service.addEmployee(object).subscribe(res => alert(res.toString()));
  }

  updateEmployee(): void {
    let object = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining
    };
    this.service.updateEmployee(object).subscribe(res => alert(res.toString()));
  }
}
