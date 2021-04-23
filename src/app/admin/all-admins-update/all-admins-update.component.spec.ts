import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdminsUpdateComponent } from './all-admins-update.component';

describe('AllAdminsUpdateComponent', () => {
  let component: AllAdminsUpdateComponent;
  let fixture: ComponentFixture<AllAdminsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAdminsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAdminsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
