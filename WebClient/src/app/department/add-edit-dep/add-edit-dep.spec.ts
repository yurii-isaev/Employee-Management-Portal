import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDep } from './add-edit-dep';

describe('AddEditDepComponent', () => {
  let component: AddEditDep;
  let fixture: ComponentFixture<AddEditDep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDep ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
