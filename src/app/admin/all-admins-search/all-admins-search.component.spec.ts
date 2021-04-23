import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdminsSearchComponent } from './all-admins-search.component';

describe('AllAdminsSearchComponent', () => {
  let component: AllAdminsSearchComponent;
  let fixture: ComponentFixture<AllAdminsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAdminsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAdminsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
