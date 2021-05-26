import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ShowDep } from './show-dep';
import { SharedService } from '../../shared.service';
import { FormsModule } from "@angular/forms";
import { of } from 'rxjs';

describe('ShowDepComponent', () => {
  let component: ShowDep;
  let fixture: ComponentFixture<ShowDep>;
  let service: SharedService;
  let mockList: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDep ],
      imports: [ HttpClientModule, FormsModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDep);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get<SharedService>(SharedService as any);
    mockList = ['test'];
    fixture.detectChanges();
  });

  it('should create component', () =>
    expect(component).toBeTruthy());

  it('should call shared service when update department list', () => {
    const spy = spyOn(service, 'getAllDepartmentsFromDB').and.returnValue(of(mockList));
    component.updateDepList();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should set value department list when update department list', () => {
    spyOn(service, 'getAllDepartmentsFromDB').and.returnValue(of(mockList));
    component.updateDepList();
    expect(component.departmentList).toEqual(mockList);
    expect(component.departmentListWithoutFilter).toEqual(mockList);
  });
});
