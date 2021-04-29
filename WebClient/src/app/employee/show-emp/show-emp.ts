import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.html',
  styleUrls: ['./show-emp.css']
})
export class ShowEmp implements OnInit {
  EmployeeList: any = [];
  emp: any;
  ModalTitle: string;
  ActivateAddEditEmpComp: boolean = false;

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList(): void {
    this.service.getEmpList().subscribe(data => this.EmployeeList = data);
  }

  addClick(): void {
    this.emp = {
      EmployeeId: 0,
      EmployeeName: '',
      Department: '',
      DateOfJoining: '',
      PhotoFileName: 'anonymous.png'
    }
    this.ModalTitle = 'Add Employee';
    this.ActivateAddEditEmpComp = true;
  }

  closeClick(): void {
    this.refreshEmpList();
    this.ActivateAddEditEmpComp = false;
  }
}
