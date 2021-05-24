import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { IDepartment } from '../show-dep/show-dep';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.html',
  styleUrls: ['./add-edit-dep.css']
})
export class AddEditDep implements OnInit {
  @Input() Department: IDepartment;
  departmentId: number;
  departmentName: string;

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.departmentId = this.Department.DepartmentId;
    this.departmentName = this.Department.DepartmentName;
  }

  getDepartment(): IDepartment {
    return this.Department = {
      DepartmentId: this.departmentId,
      DepartmentName: this.departmentName
    };
  }

  addDepartment(): void {
    this.service.addDepartmentToDB(this.getDepartment())
      .subscribe(res => alert(res.toString()));
  }

  updateDepartment(): void {
    this.service.updateDepartmentToDB(this.getDepartment())
      .subscribe(res => alert(res.toString()));
  }
}
