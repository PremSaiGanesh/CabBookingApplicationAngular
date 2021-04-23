import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLogInComponent } from './customer-log-in.component';

describe('CustomerLogInComponent', () => {
  let component: CustomerLogInComponent;
  let fixture: ComponentFixture<CustomerLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
