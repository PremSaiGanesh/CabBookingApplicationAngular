import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverLogInComponent } from './driver-log-in.component';

describe('DriverLogInComponent', () => {
  let component: DriverLogInComponent;
  let fixture: ComponentFixture<DriverLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
