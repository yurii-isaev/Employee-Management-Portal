import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowDep } from './show-dep';
import { SharedService } from '../../shared.service';
import { of } from 'rxjs';

describe('ShowDepComponent', () => {
  let component: ShowDep;
  let fixture: ComponentFixture<ShowDep>;
  let service: SharedService;
  let spy: jasmine.Spy;
  let mockList: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDep ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDep);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get<SharedService>(SharedService as any);
    mockList = [1, 'test'];
    spy = spyOn(service, 'getDepList').and.returnValue(of(mockList));
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

  it('should call shared service', () => {
    component.refreshDepList();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should set value department list', () => {
    component.refreshDepList();
    expect(component.DepartmentList).toEqual(mockList);
  });
});
