import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.html',
  styleUrls: ['./show-dep.css']
})
export class ShowDep implements OnInit {

  DepartmentList: any = [];

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList(): void {
    this.service.getDepList().subscribe(data => this.DepartmentList = data);
  }
}
