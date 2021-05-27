import { TestBed, inject } from '@angular/core/testing';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SharedService', () => {
  let service: SharedService;
  let formData: FormData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule ]
    });
    service = TestBed.inject(SharedService);
  });

  it('should be created service', () =>
    expect(service).toBeTruthy());

  it('should returns list of departments', inject([SharedService, HttpTestingController],
    (service: SharedService, backend: HttpTestingController) => {
      const mock = ['test'];
      service.getAllDepartmentsFromDB().subscribe(deps => expect(deps).toEqual(mock));
      backend.expectOne({method: 'GET', url: 'http://localhost:5000/api/Department'}).flush(mock);
    }));

  it('should returns update photo name', inject([SharedService, HttpTestingController],
    (service: SharedService, backend: HttpTestingController) => {
      const mockDepartments = 'test';
      service.updatePhotoToStorage(1, formData).subscribe(departments => expect(departments).toEqual(mockDepartments));
      backend.expectOne({method: 'POST', url: 'http://localhost:5000/api/Employee/1/UpdatePhoto'}).flush(mockDepartments);
    }));
});
