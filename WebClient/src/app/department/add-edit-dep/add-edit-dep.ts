import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.html',
  styleUrls: ['./add-edit-dep.css']
})
export class AddEditDep implements OnInit {

  @Input() dep: any;
  DepartmentId: string;
  DepartmentName: string;

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
  }

  addDepartment(): void {
    let object = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };
    this.service.addDepartment(object).subscribe(res => alert(res.toString()));
  }

  updateDepartment(): void {
    let object = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };
    this.service.updateDepartment(object).subscribe(res => alert(res.toString()));
  }
}
