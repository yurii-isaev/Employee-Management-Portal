import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.html',
  styleUrls: ['./show-emp.css']
})
export class ShowEmp implements OnInit {
  EmployeeList: any = [];

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList(): void {
    this.service.getEmpList().subscribe(data => this.EmployeeList = data);
  }
}
