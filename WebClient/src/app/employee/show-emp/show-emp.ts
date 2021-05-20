import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

export interface IEmployee {
  EmployeeId: number;
  EmployeeName: string;
  Department: string;
  DateOfJoining: string;
  PhotoFileName: string;
}

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.html',
  styleUrls: ['./show-emp.css']
})
export class ShowEmp implements OnInit {
  Employee: IEmployee;
  employeeList: Array<string>;
  modalTitle: string;
  activateAddEditEmpComp: boolean = false;

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.updateEmpList();
  }

  updateEmpList(): void {
    this.service.getAllEmployeesFromDB().subscribe(data => this.employeeList = data);
  }

  addEmployee(): void {
    this.Employee = {
      EmployeeId: 0,
      EmployeeName: '',
      Department: '',
      DateOfJoining: '',
      PhotoFileName: 'anonymous.png'
    }
    this.modalTitle = 'Add Employee';
    this.activateAddEditEmpComp = true;
  }

  closeEmployee(): void {
    this.updateEmpList();
    this.activateAddEditEmpComp = false;
  }

  editEmployee(item): void {
    this.Employee = item;
    this.modalTitle = "Edit Employee";
    this.activateAddEditEmpComp = true;
    console.warn(item);
  }

  showConfirm(item): void {
    if (confirm('Are you sure??'))
      return this.deleteEmployee(item);
  }

  deleteEmployee(item: any): void {
    this.service.deleteEmployeeFromDB(item.EmployeeId).subscribe(data => {
      try {
        alert(data.toString());
        this.updateEmpList();
        console.warn('Employee deleted!')
      } catch (e) {
        e.console.error('Employee not deleted!')
      }
    })
  };
}
