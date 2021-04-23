import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSignUpComponent } from './driver-sign-up.component';

describe('DriverSignUpComponent', () => {
  let component: DriverSignUpComponent;
  let fixture: ComponentFixture<DriverSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
