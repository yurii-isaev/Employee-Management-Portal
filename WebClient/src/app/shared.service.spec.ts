import { TestBed, inject } from '@angular/core/testing';
import { SharedService } from './shared.service';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SharedService', () => {
  let service: SharedService;
  let formData: FormData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => expect(service).toBeTruthy());

  it('should returns list of departments', inject([SharedService, HttpTestingController],
    (service: SharedService, backend: HttpTestingController) => {
      const mockDepartments = [{test: 'test'}];
      service.getDepList().subscribe(departments => expect(departments).toEqual(mockDepartments));
      backend.expectOne({method: 'GET', url: 'http://localhost:5000/api/Department'}).flush(mockDepartments);
    }));

  it('should returns update photo name', inject([SharedService, HttpTestingController],
    (service: SharedService, backend: HttpTestingController) => {
      const mockDepartments = 'test';
      service.updatePhotoToStorage(1, formData).subscribe(departments => expect(departments).toEqual(mockDepartments));
      backend.expectOne({method: 'POST', url: 'http://localhost:5000/api/Employee/1/UpdatePhoto'}).flush(mockDepartments);
    }));
});
