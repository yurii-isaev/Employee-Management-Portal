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

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList(): void {
    this.service.getDepList().subscribe(data => this.DepartmentList = data);
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
}
