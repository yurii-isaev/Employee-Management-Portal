import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmp } from './show-emp';

describe('ShowEmpComponent', () => {
  let component: ShowEmp;
  let fixture: ComponentFixture<ShowEmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEmp ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
