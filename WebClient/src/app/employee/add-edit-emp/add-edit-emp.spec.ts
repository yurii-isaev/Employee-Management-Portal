import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddEditEmp } from './add-edit-emp';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../shared.service';
import { of } from 'rxjs';
import { IEmployee } from '../show-emp/show-emp';


describe('AddEditEmpComponent', () => {
  let component: AddEditEmp;
  let fixture: ComponentFixture<AddEditEmp>;
  let service: SharedService;
  let mockList: Array<string>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEmp ],
      imports: [ HttpClientModule, FormsModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmp);
    component = fixture.componentInstance;
    component.Employee = <IEmployee>{EmployeeId: 1};
    service = fixture.debugElement.injector.get<SharedService>(SharedService as any);
    mockList= ['test'];
    fixture.detectChanges();
  });

  it('should create component', () => expect(component).toBeTruthy());

  it('should call shared service when load department list', () => {
    const spyGetAllDepNames = spyOn(service, 'getAllDepNamesFromDB').and.returnValue(of(mockList));
    component.loadDepartmentList();
    expect(spyGetAllDepNames.calls.any()).toBeTruthy();
  });

  it('should set value department list when load department list', () => {
    spyOn(service, 'getAllDepNamesFromDB').and.returnValue(of(mockList));
    component.loadDepartmentList();
    expect(component.departmentList).toEqual(mockList);
  });
});
