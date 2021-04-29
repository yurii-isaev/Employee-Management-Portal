import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.html',
  styleUrls: ['./add-edit-emp.css']
})
export class AddEditEmp implements OnInit {

  @Input() emp: any;

  constructor() {}

  ngOnInit(): void {}
}
