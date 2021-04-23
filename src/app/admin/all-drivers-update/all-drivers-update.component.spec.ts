import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDriversUpdateComponent } from './all-drivers-update.component';

describe('AllDriversUpdateComponent', () => {
  let component: AllDriversUpdateComponent;
  let fixture: ComponentFixture<AllDriversUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDriversUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDriversUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
