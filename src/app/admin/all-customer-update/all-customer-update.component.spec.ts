import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCustomerUpdateComponent } from './all-customer-update.component';

describe('AllCustomerUpdateComponent', () => {
  let component: AllCustomerUpdateComponent;
  let fixture: ComponentFixture<AllCustomerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCustomerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCustomerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
