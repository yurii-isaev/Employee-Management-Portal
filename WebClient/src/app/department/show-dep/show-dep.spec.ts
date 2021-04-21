import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDep } from './show-dep';

describe('ShowDepComponent', () => {
  let component: ShowDep;
  let fixture: ComponentFixture<ShowDep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDep ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
