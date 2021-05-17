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
  let mock: string;

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
    mockList = ['test'];
    mock = 'test';
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

  it('should call shared service when add employee', () => {
    const spyAddEmp = spyOn(service, 'addEmployeeToDB').and.returnValue(of(mock));
    component.addEmployee();
    expect(spyAddEmp.calls.any()).toBeTruthy();
  });

  it('should call shared service when update employee', () => {
    const spyUpdateEmp = spyOn(service, 'updateEmployeeToDB').and.returnValue(of(mock));
    component.updateEmployee();
    expect(spyUpdateEmp.calls.any()).toBeTruthy();
  });

  it('should call file reader when select file', () => {
    const mockReader: FileReader = jasmine.createSpyObj('FileReader', ['readAsDataURL', 'onload']);
    const mockFile: File = new File([''], 'filename', {type: 'text/html'});
    const mockEvent = {target: {files: [mockFile]}};
    spyOn(window as any, 'FileReader').and.returnValue(mockReader);
    component.onFileSelected(mockEvent as any);
    expect((window as any).FileReader).toHaveBeenCalled();
    expect(mockReader.readAsDataURL).toHaveBeenCalledWith(mockFile);
  });

  it('should call shared service when upload file', () => {
    const spyUploadPhoto = spyOn(service, 'uploadPhotoToStorage').and.returnValue(of(mock));
    component.uploadFile();
    expect(spyUploadPhoto.calls.any()).toBeTruthy();
  });

  it('should set value photo name when upload file', () => {
    spyOn(service, 'uploadPhotoToStorage').and.returnValue(of(mock));
    component.uploadFile();
    expect(component.photoFileName).toEqual(mock);
  });
});
