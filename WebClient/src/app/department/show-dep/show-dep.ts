import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

export interface IDepartment {
  DepartmentId: number;
  DepartmentName: string;
}

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.html',
  styleUrls: ['./show-dep.css']
})
export class ShowDep implements OnInit {
  private Department: IDepartment;
  departmentList: Array<string>;
  activateAddEditDepComp: boolean;
  modalTitle: string;

  departmentIdFilter: string;
  departmentNameFilter: string;
  departmentListWithoutFilter: Array<any>;

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.updateDepList();
    this.activateAddEditDepComp = false;
    this.departmentIdFilter = '';
    this.departmentNameFilter = '';
  }

  updateDepList(): void {
    this.service.getAllDepartmentsFromDB().subscribe(data => {
      this.departmentList = data;
      this.departmentListWithoutFilter = data;
    });
  }

  addDepartment(): void {
    this.Department = {
      DepartmentId: 0,
      DepartmentName: ''
    };
    this.modalTitle = 'Add Department';
    this.activateAddEditDepComp = true;
  }

  closeDepartment(): void {
    this.updateDepList();
    this.activateAddEditDepComp = false;
  }

  editDepartment(item: any): void {
    this.Department = item;
    this.modalTitle = 'Edit Department';
    this.activateAddEditDepComp = true;
  }

  showConfirm(item): void {
    if (confirm('Are you sure??'))
      this.deleteDepartment(item);
  }

  deleteDepartment(item): void {
    this.service.deleteDepartmentFromDB(item.DepartmentId).subscribe(data => {
      try {
        alert(data.toString());
        this.updateDepList();
        console.warn('Employee deleted!')
      } catch (e) {
        e.console.error('Employee not deleted!')
      }
    });
  }

  FilterFn() {
    let depIdFilter = this.departmentIdFilter;
    let depNameFilter = this.departmentNameFilter;

    this.departmentList = this.departmentListWithoutFilter.filter((dep: IDepartment) => {
      return dep.DepartmentId.toString().toLowerCase()
          .includes(depIdFilter.toString().trim().toLowerCase())
        &&
        dep.DepartmentName.toString().toLowerCase()
          .includes(depNameFilter.toString().trim().toLowerCase())
    });
  }

  sortResult(prop: string, asc: boolean) {
    this.departmentList = this.departmentListWithoutFilter.sort((a, b) => {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }
}
