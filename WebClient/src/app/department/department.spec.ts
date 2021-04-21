import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Department } from './department';

describe('DepartmentComponent', () => {
  let component: Department;
  let fixture: ComponentFixture<Department>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Department ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Department);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
