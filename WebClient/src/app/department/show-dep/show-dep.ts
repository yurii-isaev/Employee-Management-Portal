import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.html',
  styleUrls: ['./show-dep.css']
})
export class ShowDep implements OnInit {

  DepartmentList: any = [];
  dep: any;
  ActivateAddEditDepComp: boolean = false;
  ModalTitle: string;

  DepartmentIdFilter: string = '';
  DepartmentNameFilter: string = '';
  DepartmentListWithoutFilter: any = [];

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList(): void {
    this.service.getDepList().subscribe(data => {
      this.DepartmentList = data;
      this.DepartmentListWithoutFilter = data;
    });
  }

  addClick(): void {
    this.dep = {
      DepartmentId: 0,
      DepartmentName: ''
    };
    this.ModalTitle = 'Add Department';
    this.ActivateAddEditDepComp = true;
  }

  closeClick(): void {
    this.refreshDepList();
    this.ActivateAddEditDepComp = false;
  }

  editClick(item: any): void {
    this.dep = item;
    this.ModalTitle = 'Edit Department';
    this.ActivateAddEditDepComp = true;
  }

  deleteClick(item): void {
    if (confirm('Are you sure?')) {
      this.service.deleteDepartment(item.DepartmentId).subscribe(data => {
        alert(data.toString());
        this.refreshDepList();
      });
    }
  }

  FilterFn() {
    let DepartmentIdFilter = this.DepartmentIdFilter;
    let DepartmentNameFilter = this.DepartmentNameFilter;

    this.DepartmentList = this.DepartmentListWithoutFilter.filter(function (el) {
      return el.DepartmentId.toString().toLowerCase()
          .includes(DepartmentIdFilter.toString().trim().toLowerCase())
        &&
        el.DepartmentName.toString().toLowerCase()
          .includes(DepartmentNameFilter.toString().trim().toLowerCase())
    });
  }

  sortResult(prop: string, asc: boolean) {
    this.DepartmentList = this.DepartmentListWithoutFilter.sort(function (a, b) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }
}
