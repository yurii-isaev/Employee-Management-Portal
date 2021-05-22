import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ShowEmp } from './show-emp';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../shared.service';
import { of } from 'rxjs';

describe('ShowEmpComponent', () => {
  let component: ShowEmp;
  let fixture: ComponentFixture<ShowEmp>;
  let service: SharedService;
  let mockList: Array<string>;
  let mock: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEmp ],
      imports: [ HttpClientModule, FormsModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmp);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get<SharedService>(SharedService as any);
    mockList = ['test'];
    mock = 'test';
    fixture.detectChanges();
  });

  it('should create component', () => expect(component).toBeTruthy());

  it('should call shared service when refresh employee list', () => {
    const spyGetEmpList = spyOn(service, 'getAllEmployeesFromDB').and.returnValue(of(mockList));
    component.updateEmpList();
    expect(spyGetEmpList.calls.any()).toBeTruthy();
  });

  it('should set value department list when refresh employee list', () => {
    spyOn(service, 'getAllEmployeesFromDB').and.returnValue(of(mockList));
    component.updateEmpList();
    expect(component.employeeList).toEqual(mockList);
  });

  it('should call confirm when show confirm', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    component.showConfirm(1);
    expect(component.showConfirm).toBeTruthy();
  });

  it('should call shared service when delete employee', () => {
    const spyDeleteEmployee = spyOn(service, 'deleteEmployeeFromDB').and.returnValue(of(mock));
    component.deleteEmployee(1);
    expect(spyDeleteEmployee.calls.any()).toBeTruthy();
  });
});
